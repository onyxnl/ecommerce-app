"use client";
import React from "react";
import { useCategories } from "../hooks/useCategories";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Categories() {
  const { data: categories, isLoading, isError } = useCategories();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  //console.log(categories);

  return (
    <>
      {/* <div className="flex gap-4 mt-3">
      {
        categories?.slice(0,6)?.map((cat:any,index:number) => (
        <div key={index} className="border-2 border-avocado-400 p-3 rounded-md ">
          {cat.name}
        </div>
      ))}
      </div> */}
     <Container maxWidth="lg">
       <Grid container spacing={2}>
        {categories?.slice(0, 6)?.map((cat: any, index: number) => (
          <Grid size={{xs: 6, sm: 4, md: 2}}> {cat.name}</Grid>
        ))}
      </Grid>
     </Container>
    </>
  );
}

export default Categories;
