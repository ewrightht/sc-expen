import axios from "axios";
import { toast } from "react-toastify";

export const createActivitiesSlice = (set, get) => ({
  userBalance: null,

  getUserBalance: async function (userId) {
    let absoluteUrl = `http://localhost:5000/api/activities/get-balance/${userId}`;
    let { data } = await axios.get(absoluteUrl);

    if (data.status === "ok") {
      set({ userBalance: data.user.user_balance });
    }

    if (data.status === "error") {
      toast.error(data.message);
    }
  }
});