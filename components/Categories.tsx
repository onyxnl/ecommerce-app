"use client";
import React, { useState } from "react";
import { useCategories } from "../hooks/useCategories";
import {assets} from "../hooks/assets.js";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
function Categories() {
  const { data: categories, isLoading, isError } = useCategories();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  //console.log(typeof assets);
  const iconImg = Object.values(assets);

  return (
    <>
      {/* <div className="flex gap-4 mt-3">
      {
        categories?.slice(0,6)?.map((cat:any,index:number) => (
        <div key={index} className="border-2 border-avocado-400 p-3 rounded-md ">
          {cat.name}
        </div>
      ))}  ASK: how to index with icon and name
      </div> */}
     <Container maxWidth="lg">
       <Grid container spacing={2} className="border border-gray-300 rounded-md flex gap-0">
        {categories?.slice(0, 6)?.map((cat: any, index: number) => (
          <Grid key={index} size={{xs: 2}} className="flex flex-row item-center px-2 py-3 items-center gap-2 justify-center hover:bg-blue-400 hover:text-white hover:cursor-pointer">
            <Image
                src={iconImg[index]}
                width={30}
                height={30}
                alt="Picture"
              />
             {cat.name}</Grid>
        ))}
      </Grid>
     </Container>
    </>
  );
}

export default Categories;
