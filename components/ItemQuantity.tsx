"use client";
import React,{useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useCartStore} from '@/store/useCartStore';
import { CartItem } from '@/types/general-types';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

type Props ={
  item:CartItem
}

function ItemQuantity({item}:Props) {
  const {cart,updateQuantity,removeItem} = useCartStore();
    return (
      <>
      <Box sx={{ width: 200,display:'flex', alignItems:'center', columnGap:'10px'}}>
        <ButtonGroup  variant="contained" aria-label="Basic button group">
            <Button onClick={() => updateQuantity(item.id,'dec')}>-</Button>
            <Button>{item.quantity}</Button>
            <Button onClick={() => updateQuantity(item.id,'inc')}>+</Button>
        </ButtonGroup>
        <Typography>{item.price * item.quantity}</Typography>
      </Box>
      </>
    )
}
export default ItemQuantity;