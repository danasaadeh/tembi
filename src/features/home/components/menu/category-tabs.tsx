import React from "react";
import type { MenuCategory } from "../../types/index";

interface CategoryTabsProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

const categories: MenuCategory[] = [
  "Popular",
  "Salad",
  "Pasta",
  "Sandwiches",
  "Pizza",
  "Burger",
  "Juice",
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 border-b border-gray-200">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`pb-3 px-2 text-base md:text-lg font-medium transition-colors relative ${
            activeCategory === category
              ? "text-red-600"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {category}
          {activeCategory === category && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
