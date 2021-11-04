import axios from "axios";
import { toast } from "react-toastify";
import { setHeaders } from "../../helpers/setHeaders";

export const createActivitiesSlice = (set, get) => ({
  userBalance: null,
  totalExpenses: 0,
  totalExpensesAmount: 0,
  activities: [],
  expenses: [],

  getUserStats: async function () {
    let absoluteUrl = "http://localhost:5000/api/activities/stats";
    let headers = setHeaders();
    let { data: serviceData } = await axios.get(absoluteUrl, { headers });

    const { status, user, message } = serviceData;
    if (status === "ok") {
      set({
        userBalance: user.user_balance,
        totalExpenses: user.user_total_expenses,
        totalExpensesAmount: user.user_total_amount
      });
    }

    if (status === "error") {
      toast.error(message);
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
      toast.error(data.message);
    }
  },

  createExpenseActivity: async function (description, amount, category) {
    let absoluteUrl = "http://localhost:5000/api/activities/expense";
    let headers = setHeaders();
    let { data } = await axios.post(
      absoluteUrl, { description, amount, category }, { headers }
    );

    if (data.status === "ok") {
      toast.success(data.message);
    }

    if (data.status === "error") {
      toast.error(data.message);
    }
  },

  getAllExpenses: async function () {
    let absoluteUrl = "http://localhost:5000/api/activities/expenses";
    let headers = setHeaders();
    let { data: serviceData } = await axios.get(absoluteUrl, { headers });

    const { status, data, message } = serviceData;
    if (status === "ok") {
      set({ expenses: data.expenses });
    }

    if (status === "error") {
      toast.error(message);
    }
  }
});