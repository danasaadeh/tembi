import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { MenuItem } from "../types/index";

const fetchMenuItems = async (category?: string): Promise<MenuItem[]> => {
  const response = await axios.get("/api/menu", {
    params: { category },
  });
  return response.data;
};

export const useMenuData = (category?: string) => {
  return useQuery({
    queryKey: ["menu", category],
    queryFn: () => fetchMenuItems(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
