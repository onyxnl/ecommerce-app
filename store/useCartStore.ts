import { CartItem, Product } from '@/types/general-types';
import { create } from 'zustand'
import {persist} from 'zustand/middleware';

interface CartState{
  cart: CartItem[];
  addtoCart: (product: Product) => void;
}

export const useCartStore = create<CartState>() (
  persist(
    (set) => ({
      cart :[],
      addtoCart: (product) =>{
        set((state) => {
          const newCartItem = {...product};
          console.log(state);
          return { cart:[...state.cart,newCartItem]};
        });
      }
    }),
    {name:"cartitem"}
  )
)
