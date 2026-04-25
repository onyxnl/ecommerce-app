import { CartItem, Product } from "@/types/general-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartItem[];
  totalItem:number;
  addtoCart: (product: Product, quantity: number) => void;
  updateQuantity: (id: number, type: "inc" | "dec") => void;
  removeItem: (id: number) => void;
  clearAllItem: () => void;
  totalCount: () => void;
  
}

const getTotalCount = (cart:CartItem[]) => cart.reduce((sum:any, item:any) => {
  return sum + item.quantity
}, 0)

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      totalItem: 0,
      addtoCart: (product, quantity) => {
        set((state) => {
          const exist = state.cart.find((item) => product.id === item.id);
          if (exist) {
            const updateItemQty = state.cart.map((item) => {
              if (product.id === item.id) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
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
      updateQuantity: (id, type) => {
        set((state) => ({
          cart: state.cart.map((item) => {
            if (item.id !== id) return item;
            const newQuantity =
              type === "inc" ? item.quantity + 1 : item.quantity - 1;
            return {
              ...item,
              quantity: Math.max(1, newQuantity),
            };
          }),
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      clearAllItem: () => {
        set((state) => ({
          cart: [],
        }));
      },
      totalCount: () => {
        set((state) => ({
          totalItem: state.cart.reduce((sum:any, item:any) => {
            return sum + item.quantity
          }, 0)
        }))
       
      },
    }),
    { name: "cartitem" }
  )
);
