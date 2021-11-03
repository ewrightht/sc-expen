import axios from "axios";
import { toast } from "react-toastify";
import { setHeaders } from "../../helpers/setHeaders";

export const createActivitiesSlice = (set, get) => ({
  userBalance: null,
  activities: [],

  getUserBalance: async function () {
    let absoluteUrl = "http://localhost:5000/api/activities/get-balance";
    let headers = setHeaders();
    let { data } = await axios.get(absoluteUrl, { headers });

    if (data.status === "ok") {
      set({ userBalance: data.user.user_balance });
    }

    if (data.status === "error") {
      toast.error(data.data.message);
    }
  },

  getAllActivities: async function () {
    let absoluteUrl = "http://localhost:5000/api/activities/all";
    let headers = setHeaders();
    let { data } = await axios.get(absoluteUrl, { headers });

    if (data.status === "ok") {
      set({ activities: data.data });
    }

    if (data.status === "error") {
      toast.error(data.data.message);
    }
  }
});