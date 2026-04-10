import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductsByCategory = () => {
    return useQuery({
      queryKey: ["products","beauty"],
      queryFn: async () => {
        const response = await axios.get(`https://dummyjson.com/products/category/beauty`);
        return response.data;
      },
    });
};
   