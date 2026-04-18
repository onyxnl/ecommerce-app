import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {useCategoryStore} from "@/store/useCategoryStore";

export const useProductsByCategory = () => {
  const {selectedCategory,setSelectedCategory} = useCategoryStore();

  return useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${selectedCategory}`,
      );
      return response.data;
    },
  });
};
