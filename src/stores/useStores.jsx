import create from "zustand";
import { createExpenseSlice } from "./expenses/createExpenseSlice";

export const useStores = create((set, get) => ({
  ...createExpenseSlice(set, get),
}));