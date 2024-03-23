import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export const loadingStore = create(
  devtools(
    immer((set) => ({
      isLoading: false,
      setLoading: (newBool) =>
        set((state) => {
          state.isLoading = newBool;
        }),
    }))
  )
);