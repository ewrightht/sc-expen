import axios from "axios";

export const createExpenseSlice = (set, get) => ({
  expenses: [],
  isLoading: false,

  getExpenses: async function () {
    try {
      set({ isLoading: true });
      const source = axios.CancelToken.source();

      let absoluteUrl = "https://reqres.in/api/unknown";
      let { data } = await axios.get(absoluteUrl, { cancelToken: source.token });
      set({ expenses: data.data });

    } catch (error) {
      throw new Error(error);

    } finally {
      set({ isLoading: false });
    }

  },
});