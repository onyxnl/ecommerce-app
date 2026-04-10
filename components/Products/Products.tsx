"use client";
import React from "react";
import { useProductsByCategory } from "../../hooks/useProductsByCategory";

function Products() {
  const { data: productsData, isLoading, isError } = useProductsByCategory();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  console.log(productsData.products);
  const products = productsData.products;
  const green = "bg-[#456]";
  return (
    <>
    
      <h2 className="mt-17">Products</h2>
      <div className="grid grid-cols-4 gap-2">
        {products?.map((prod:any, index:number) => (
          <div key={index}>
            <div>
              <img src={prod.thumbnail} className="w-full" />
            </div>
            <h5 className={`text-lg font-bold ${green} font-Open_Sans`}>{prod.title}</h5>
            <div>{prod.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
