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


function Cartitems() {
  //const { data: productsData, isLoading, isError } = useProductsByCategory();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error</p>;
  //console.log(productsData.products);
//   const products = productsData.products;
    const {cart} = useCartStore();
    console.log("cart" + cart);
  
  return (
    <>
      <Container maxWidth="lg">
        <h2 className="mt-2 mb-3">Cart items</h2>
        <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                    >
                        Ali Connors
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                    >
                        Sandra Adams
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            </List>
      </Container>
    </>
  );
}

export default Cartitems;
