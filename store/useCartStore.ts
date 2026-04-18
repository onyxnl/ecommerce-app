import { create } from 'zustand'

interface CartStore{
  cart: string[] | null;
  addtoCart: (products: string[] | null) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: "beauty",
    setCart: (products) => set({setCart:products}),
}))
