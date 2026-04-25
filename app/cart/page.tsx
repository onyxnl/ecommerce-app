"use client";
import React from "react";
import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useCartStore} from '@/store/useCartStore';
import { CartItem } from '@/types/general-types';
import ItemQuantity from "@/components/ItemQuantity";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import PaymentSummary from "@/components/PaymentSummary";
import EmptyCart from "@/components/Emptycart";

function page() {
    const {cart,removeItem,clearAllItem} = useCartStore();
   // const addToCart = useCartStore((state) => state.addtoCart ); // destructuring style
    const isEmpty = cart.length;
   
  return (
    <>
   
        <Container maxWidth="lg">
            <Typography variant="h3">Shopping Cart</Typography>
            {isEmpty == 0 ? <EmptyCart></EmptyCart> : (
                <React.Fragment>
                    <Button variant="contained" color="error" sx={{display:'block', marginLeft:'auto'}}
                        onClick={() => clearAllItem()}>
                        Empty cart
                    </Button>
                    <Grid container spacing={2} sx={{marginTop:'30px'}}>
                    <Grid size={8}>
                        <List sx={{ width: '100%'}}>
                        {cart?.map((cartitem: CartItem, index: number) => (
                            <React.Fragment key={index}>
                                <ListItem alignItems="flex-start" sx={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                                    <IconButton aria-label="delete" color="error" >
                                    </IconButton>
                                    <ListItemAvatar sx={{ minWidth: 80 }}>
                                        <Avatar alt="Remy Sharp" src={cartitem.thumbnail} />
                                    </ListItemAvatar>
                                    <ListItemText sx={{ width: 100 }}
                                        primary={cartitem.title}
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="error"
                                                sx={{  display: 'inline' }}
                                                onClick={() => removeItem(cartitem.id)}
                                            >
                                            Remove
                                            </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                    <ListItemText sx={{ width: 20}} primary={cartitem.price}></ListItemText>
                                    <ListItemText sx={{ width: 20 }} primary={cartitem.quantity}></ListItemText>
                                    <ItemQuantity item={cartitem} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                
                            </React.Fragment>
                        ))}
                    </List>
                    </Grid>
                    <Grid size={4} sx={{border:'1px solid gray', padding:'20px 30px'}}>
                        <PaymentSummary ></PaymentSummary>
                    </Grid>
                    </Grid>
                </React.Fragment>
            )}

            
           
            
      </Container>
    </>
  )
}

export default page