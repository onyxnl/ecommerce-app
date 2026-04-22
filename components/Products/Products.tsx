"use client";
import React from "react";
import { useProductsByCategory } from "../../hooks/useProductsByCategory";
import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Image from 'next/image';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useCartStore} from '@/store/useCartStore';


function Products() {
  const { data: productsData, isLoading, isError } = useProductsByCategory();
  const addToCart = useCartStore((state) => state.addtoCart );
  // const {cart} = useCartStore();
  // console.log("cart" + cart);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  //console.log(productsData.products);
  const products = productsData.products;
  const green = "bg-[#456]";
  return (
    <>
      <Container maxWidth="lg">
        <h2 className="mt-17 mb-3">Products</h2>
        <Grid container spacing={2}>
          {products?.map((prod: any, index: number) => (
           
            <Grid size={{xs:6, sm:4, md:3}} key={index} className="border border-gray-400 rounded-sm bg-blue-400 overflow-hidden shadow-lg shadow-gray-300 text-center">
              <div className="bg-white">
                <Image
                  src={prod.thumbnail}
                  className="w-full aspect-1 object-cover"
                  width={500}
                  height={500}
                  alt="Picture"
                />
              </div>
              <div className="p-3 d-flex">
                <h5 className={`text-md font-bold font-Open_Sans min-h-12`}>
                  {prod.title}
                </h5>
                <div className="pb-2">{prod.price}</div>
                <Button 
                  onClick={() => addToCart(prod)}
                  variant="contained" endIcon={<ShoppingCartTwoToneIcon />}>
                  Add to cart
                </Button>

              </div>
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Products;
