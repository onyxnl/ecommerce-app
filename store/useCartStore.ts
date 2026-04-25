import { CartItem, Product } from '@/types/general-types';
import { create } from 'zustand'
import {persist} from 'zustand/middleware';

interface CartState{
  cart: CartItem[];
  addtoCart: (product: Product, quantity: number) => void;
  updateQuantity:(id:number, type:"inc" | "dec") => void;
  removeItem:(id: number) => void;
  clearAllItem:() => void;
}

export const useCartStore = create<CartState>() (
  persist(
    (set) => ({
      cart :[],
      addtoCart: (product, quantity) =>{
        set((state) => {
          const exist = state.cart.find((item) => product.id === item.id);
          if(exist){
            const updateItemQty = state.cart.map((item) => {
                if(product.id === item.id){
                  return {
                    ...item,
                    quantity: item.quantity + quantity,
                  }  
                }
                return item;
            });
            return { cart: updateItemQty }; 
          }
          return {
              cart: [...state.cart, { ...product, quantity }],
          };
        });
      },
      updateQuantity:(id, type) =>{
        set((state) => ({
          cart :state.cart.map((item) => {
            if(item.id !== id) return item;
            const newQuantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
            return {
              ...item,
              quantity: Math.max(1,newQuantity)
            };
          })
        }))
      },
      removeItem:(id) => {
        set((state) => ({
          cart : state.cart.filter((item) => item.id !== id)
        }))
      },
      clearAllItem:() => {
        set((state) => ({
          cart: []
        }))
      }
    }),
    {name:"cartitem"}
  )
)
