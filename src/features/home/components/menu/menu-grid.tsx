import React from "react";
import type { MenuItem } from "../../types/index";
import MenuCard from "./menu-card";

interface MenuGridProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export default MenuGrid;
