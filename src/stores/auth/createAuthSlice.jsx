import axios from "axios";
import { toast } from "react-toastify";

export const createAuthSlice = (set, get) => ({
  user: null,
  isAuthenticated: false,

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
        user: { uid: data.user.user_id, username },
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
        user: { uid: data.user.user_id, username: data.user.user_name },
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

  checkAuthentication: async function () {
    const token = localStorage.getItem("token") || "";
    let absoluteUrl = "http://localhost:5000/api/renew";
    let { data } = axios.get(absoluteUrl, {
      headers: {
        'x-token': token
      }
    });

    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
    }

  }
});