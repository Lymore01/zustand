/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

type searchStore = {
  input: string;
};

type cartItems = {
  cartItem: any;
};

type storeItems = {
  themeMode: string,
  toggleTheme: ()=>void
}

export const useSearch = create<searchStore>(() => ({
  input: "",
}));

export const useCart = create<cartItems>(() => ({
  cartItem: [],
}));


// theme state

export const useThemeStore = create<storeItems>((set)=>(
  {
    themeMode: 'light',
    toggleTheme: () => set((state)=>({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light'
    }))
  }
))