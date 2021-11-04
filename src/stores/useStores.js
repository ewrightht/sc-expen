import create from "zustand";
import { createActivitiesSlice } from "./activities/createActivitiesSlice";
import { createAuthSlice } from "./auth/createAuthSlice";

export const useStores = create((set, get) => ({
  ...createAuthSlice(set, get),
  ...createActivitiesSlice(set, get),
}));