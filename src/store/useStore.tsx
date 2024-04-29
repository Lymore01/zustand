/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

type createStore = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

export const useStore = create<createStore & Actions>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
