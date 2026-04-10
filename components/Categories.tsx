"use client";
import React from "react";
import { useCategories } from "../hooks/useCategories";

function Categories() {
  const { data: categories, isLoading, isError } = useCategories();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  //console.log(categories);
  
  return (
    <>
      <div><h2 className="bg-avocado-400">Categories</h2></div>
      <div className="flex gap-4 mt-3">
      {
        categories?.slice(0,6)?.map((cat:any,index:number) => (
        <div key={index} className="border-2 border-avocado-400 p-3 rounded-md ">
          {cat.name}
        </div>
      ))}
      </div>
    </>
  )
  
}

export default Categories;
