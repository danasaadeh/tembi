import React from "react";
import { Button } from "@mui/material";
import type { ViewMode, SortMode } from "../../types/index";

interface MenuControlsProps {
  viewMode: ViewMode;
  sortMode: SortMode;
  onViewModeChange: (mode: ViewMode) => void;
  onSortModeChange: (mode: SortMode) => void;
  onDownloadMenu: () => void;
}

const MenuControls: React.FC<MenuControlsProps> = ({
  viewMode,
  sortMode,
  onViewModeChange,
  onSortModeChange,
  onDownloadMenu,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
      {/* View Mode Controls */}
      <div className="flex gap-4">
        <Button
          variant={viewMode === "cards" ? "outlined" : "text"}
          onClick={() => onViewModeChange("cards")}
          sx={{
            color: viewMode === "cards" ? "#dc2626" : "#9ca3af",
            borderColor: viewMode === "cards" ? "#dc2626" : "#e5e7eb",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "8px",
            padding: "8px 24px",
            "&:hover": {
              borderColor: "#dc2626",
              backgroundColor: "transparent",
            },
          }}
        >
          View as Cards
        </Button>
        <Button
          variant={viewMode === "list" ? "outlined" : "text"}
          onClick={() => onViewModeChange("list")}
          sx={{
            color: viewMode === "list" ? "#dc2626" : "#9ca3af",
            borderColor: viewMode === "list" ? "#dc2626" : "#e5e7eb",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "8px",
            padding: "8px 24px",
            "&:hover": {
              borderColor: "#dc2626",
              backgroundColor: "transparent",
            },
          }}
        >
          View as List
        </Button>
      </div>

      <div className="h-10 w-px bg-gray-300"></div>

      {/* Sort Controls */}
      <div className="flex gap-4">
        <Button
          variant={sortMode === "name" ? "outlined" : "text"}
          onClick={() => onSortModeChange("name")}
          sx={{
            color: sortMode === "name" ? "#dc2626" : "#9ca3af",
            borderColor: sortMode === "name" ? "#dc2626" : "#e5e7eb",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "8px",
            padding: "8px 24px",
            "&:hover": {
              borderColor: "#dc2626",
              backgroundColor: "transparent",
            },
          }}
        >
          Sort by Name
        </Button>
        <Button
          variant={sortMode === "price" ? "outlined" : "text"}
          onClick={() => onSortModeChange("price")}
          sx={{
            color: sortMode === "price" ? "#dc2626" : "#9ca3af",
            borderColor: sortMode === "price" ? "#dc2626" : "#e5e7eb",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "8px",
            padding: "8px 24px",
            "&:hover": {
              borderColor: "#dc2626",
              backgroundColor: "transparent",
            },
          }}
        >
          Sort by Price
        </Button>
      </div>

      <div className="h-10 w-px bg-gray-300"></div>

      {/* Download Menu */}
      <Button
        variant="text"
        onClick={onDownloadMenu}
        sx={{
          color: "#9ca3af",
          borderColor: "#e5e7eb",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: 400,
          borderRadius: "8px",
          padding: "8px 24px",
          "&:hover": {
            color: "#dc2626",
            backgroundColor: "transparent",
          },
        }}
      >
        Download Menu
      </Button>
    </div>
  );
};

export default MenuControls;
