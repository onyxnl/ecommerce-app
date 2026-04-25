"use client";
import {useCartStore} from '@/store/useCartStore';

export function total2(){
    const {cart} = useCartStore();
    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
    console.log(total);
    return total;
}

export function itemcount2(){
    
   
    return 1;
}
const {cart} = useCartStore();
export const itemcount = cart.reduce((sum, item) => {
    return sum + item.quantity;
}, 0);

