import Categories from "@/components/Categories";
import Products from "@/components/Products/Products";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Categories />
      <Products />
    </>
  );
}
