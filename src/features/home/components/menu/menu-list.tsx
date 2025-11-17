import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { MenuItem } from "../../types/index";

interface MenuListProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

const MenuList: React.FC<MenuListProps> = ({ items, onItemClick }) => {
  const handleAddToCart = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    console.log("Add to cart:", itemId);
    // Implement add to cart functionality with Zustand
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)}
          className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-6 flex-1">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-2xl font-bold text-red-600">
              {item.price} $
            </span>
            <IconButton
              onClick={(e) => handleAddToCart(e, item.id)}
              sx={{
                color: "#dc2626",
                "&:hover": {
                  backgroundColor: "#fee2e2",
                },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
