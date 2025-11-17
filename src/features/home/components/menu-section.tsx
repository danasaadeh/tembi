import React, { useState } from "react";
import type {
  MenuItem,
  ViewMode,
  SortMode,
  MenuCategory,
} from "../types/index";
import MenuHeader from "./menu/menu-header";
import CategoryTabs from "./menu/category-tabs";
import MenuControls from "./menu/menu-controls";
import MenuGrid from "./menu/menu-grid";
import MenuList from "./menu/menu-list";
import MenuItemDialog from "./menu/menu-item-dialog";
import { mockMenuItems } from "../data/mock-menu-data";

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Popular");
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [sortMode, setSortMode] = useState<SortMode>("name");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const menuItems: MenuItem[] = mockMenuItems;

  const handleDownloadMenu = () => {
    // Implement download menu functionality
    console.log("Download menu");
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const sortedItems = [...menuItems].sort((a, b) => {
    if (sortMode === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <MenuHeader />
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <MenuControls
          viewMode={viewMode}
          sortMode={sortMode}
          onViewModeChange={setViewMode}
          onSortModeChange={setSortMode}
          onDownloadMenu={handleDownloadMenu}
        />

        {viewMode === "cards" ? (
          <MenuGrid items={sortedItems} onItemClick={handleItemClick} />
        ) : (
          <MenuList items={sortedItems} onItemClick={handleItemClick} />
        )}

        {selectedItem && (
          <MenuItemDialog
            item={selectedItem}
            open={isDialogOpen}
            onClose={handleCloseDialog}
          />
        )}
      </div>
    </section>
  );
};

export default MenuSection;
