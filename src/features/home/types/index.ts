export interface ProductOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  options?: ProductOption[];
}

export type ViewMode = "cards" | "list";
export type SortMode = "name" | "price";
export type MenuCategory =
  | "Popular"
  | "Salad"
  | "Pasta"
  | "Sandwiches"
  | "Pizza"
  | "Burger"
  | "Juice";
