import axios from "axios";

export const createAuthSlice = (set, get) => ({
  uid: null,
  username: null,
  authenticated: false,
  isLoading: false,

  validEmail: async function (email) {
    try {
      set({ isLoading: true });
      let absoluteUrl = "http://localhost:5000/api/auth/valid-email";
      let { data } = await axios.post(absoluteUrl, { email });

      return data;

    } catch (error) {
      throw new Error(error);

    } finally {
      set({ isLoading: false });
    }
  },

  registerUser: async function (email, username, password) {
    try {
      set({ isLoading: true });
      let absoluteUrl = "http://localhost:5000/api/auth/new";
      let { data } = await axios.post(absoluteUrl, { email, username, password });
      return data;

    } catch (error) {
      throw new Error(error);

    } finally {
      set({ isLoading: false });
    }
  }
});