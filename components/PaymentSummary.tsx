"use client";
import React,{useState} from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useCartStore } from "@/store/useCartStore";
function PaymentSummary() {
   
    const {cart,totalCount} = useCartStore();

    console.log("totalCount1111 >>",totalCount);
    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const itemcount = cart.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);



    return (
      <>
      <Typography variant="h4">Summary</Typography>
      <Divider sx={{margin:'5px'}} />
      <Typography variant="body2"><b>Item(s):</b>({itemcount})</Typography>
      <Typography variant="body1"><b>Total:</b>{total.toFixed(2)}</Typography>
      <Button onClick={() => totalCount()} >Test</Button>
      </>
    )
}
export default PaymentSummary;