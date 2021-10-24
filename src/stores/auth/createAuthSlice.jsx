import axios from "axios";
import { toast } from "react-toastify";

export const createAuthSlice = (set, get) => ({
  uid: null,
  username: null,
  authenticated: false,

  validEmail: async function (email) {
    let absoluteUrl = "http://localhost:5000/api/auth/valid-email";
    let { data } = await axios.post(absoluteUrl, { email });
    return data;
  },

  registerUser: async function (email, username, password) {
    let absoluteUrl = "http://localhost:5000/api/auth/new";
    let { data } = await axios.post(absoluteUrl, { email, username, password });

    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      set({
        uid: data.user.user_id,
        username: username,
        authenticated: true
      });
      toast.success(data.message);
    }
    if (data.status === "failed") {
      toast.error(data.message);
    }
    if (data.errors) {
      toast.error(data.errors[Object.keys(data.errors)[0]].msg);
    }

  },

  loginUser: async function (email, password) {
    let absoluteUrl = "http://localhost:5000/api/auth";
    let { data } = await axios.post(absoluteUrl, { email, password });

    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      set({
        uid: data.user.user_id,
        username: data.user.user_name,
        authenticated: true
      });
      toast.success(data.message);
    }
    if (data.status === "failed") {
      toast.error(data.message);
    }
    if (data.errors) {
      toast.error(data.errors[Object.keys(data.errors)[0]].msg);
    }
  }
});