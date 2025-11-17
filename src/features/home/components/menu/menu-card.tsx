import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { MenuItem } from "../../types/index";

interface MenuCardProps {
  item: MenuItem;
  onItemClick: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onItemClick }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Add to cart:", item.id);
    // Implement add to cart functionality with Zustand
  };

  const handleCardClick = () => {
    onItemClick(item);
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-6 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {item.name}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Price and Cart */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-red-600">
            {item.price} $
          </span>
          <IconButton
            onClick={handleAddToCart}
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

      {/* Image */}
      <div className="sm:w-60 sm:h-60 w-full h-64 flex-shrink-0">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MenuCard;
