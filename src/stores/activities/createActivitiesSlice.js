import axios from "axios";

export const createActivitiesSlice = (set, get) => ({
  userBalance: null,

  getUserBalance: async function (userId) {
    let absoluteUrl = "http://localhost:5000/api/activities/get-balance";
    let { data } = await axios.post(absoluteUrl, { userId });

    if (data.status === "ok") {
      set({ balance: data.user.user_balance });
    }

    return data;
  }
});