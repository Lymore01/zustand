/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

type searchStore = {
  input: string;
};

type cartItems = {
  cartItem: any;
};

export const useSearch = create<searchStore>(() => ({
  input: "",
}));

export const useCart = create<cartItems>(() => ({
  cartItem: [],
}));
