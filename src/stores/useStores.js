import create from "zustand";
import { createActivitiesSlice } from "./activities/createActivitiesSlice";
import { createAuthSlice } from "./auth/createAuthSlice";
import { createExpenseSlice } from "./expenses/createExpenseSlice";

export const useStores = create((set, get) => ({
  ...createAuthSlice(set, get),
  ...createActivitiesSlice(set, get),
  ...createExpenseSlice(set, get),
}));