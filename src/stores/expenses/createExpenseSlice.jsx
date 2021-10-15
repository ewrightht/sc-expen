import axios from "axios";

export const createExpenseSlice = (set, get) => ({
  expenses: [],
  isLoading: false,

  getExpenses: async function () {
    try {
      set({ isLoading: true });
      let absoluteUrl = "https://reqres.in/api/unknown";
      let { data } = await axios.get(absoluteUrl);
      set({ expenses: data.data });

    } catch (error) {
      throw new Error(error);

    } finally {
      set({ isLoading: false });
    }

  },
});