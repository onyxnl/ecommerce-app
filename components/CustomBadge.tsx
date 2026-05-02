"use client";
import {useState} from 'react';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import Cartitems from './Cartitems';
import Link from 'next/link';
import {useCartStore} from "@/store/useCartStore";



const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;


export default function CustomBadge() {

  const [anchorUser,setAnchorUser] = useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(true);
  };

  const handleCloseUserMenu =(event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(false);
  }
  
  const totalCount = useCartStore((state) => state.totalCount() );


  return (
    <React.Fragment>
      {/* <IconButton onClick={handleOpenNavMenu}>
        <ShoppingCartIcon fontSize="small" />
        <CartBadge badgeContent={2} color="primary" overlap="circular" />
      </IconButton> */}
      <Box sx={{ flexGrow: 0 , marginRight:'2rem'}}>
      {/* <Tooltip title="Open settings"> */}
        <Link href="/cart"> <IconButton onClick={handleOpenNavMenu}>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={totalCount} color="primary" overlap="circular" />
        </IconButton></Link>
      {/* </Tooltip> */}
      
    </Box>
    </React.Fragment>
  );
}
