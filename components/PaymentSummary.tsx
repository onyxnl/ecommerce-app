"use client";
import React,{useState} from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//import {total2,itemcount2} from '@/libs/general';
//console.log(total2, itemcount2);
function PaymentSummary() {
   

    return (
      <>
      <Typography variant="h4">Summary</Typography>
      <Divider sx={{margin:'5px'}} />
      {/* <Typography variant="body2"><b>Item(s):</b>({itemcount2})</Typography>
      <Typography variant="body1"><b>Total:</b>{total2.toFixed(2)}</Typography> */}
      </>
    )
}
export default PaymentSummary;