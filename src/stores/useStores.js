import create from "zustand";
import { createAuthSlice } from "./auth/createAuthSlice";
import { createExpenseSlice } from "./expenses/createExpenseSlice";

export const useStores = create((set, get) => ({
  ...createAuthSlice(set, get),
  ...createExpenseSlice(set, get),
}));