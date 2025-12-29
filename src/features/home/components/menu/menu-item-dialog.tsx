import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem as MuiMenuItem,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { MenuItem } from "../../types/index";
import { useNavigate } from "react-router-dom";

interface MenuItemDialogProps {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
}

const MenuItemDialog: React.FC<MenuItemDialogProps> = ({
  item,
  open,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [specialRequest, setSpecialRequest] = useState("");

  if (!item) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const selectedOptionData = item.options?.find(
    (opt) => opt.id === selectedOption
  );
  const optionsTotal = selectedOptionData?.price || 0;

  const totalPrice = (item.price + optionsTotal) * quantity;

  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      item,
      quantity,
      selectedOption,
      specialRequest,
      total: totalPrice,
    });
    // Implement Zustand cart functionality here
    onClose();
    navigate("/cart");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxWidth: "900px",
          width: "90%",
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          zIndex: 1,
          color: "gray",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Dialog Content */}
      <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 flex flex-col">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            {item.name}
          </h2>

          {/* Price */}
          <p className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            {item.price} $
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Product Option */}
          {item.options && item.options.length > 0 && (
            <div className="mb-6">
              <label className="block text-gray-900 font-medium mb-3 text-base md:text-lg">
                Product Option
              </label>
              <FormControl fullWidth>
                <Select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dc2626",
                      borderWidth: "1px",
                    },
                    "& .MuiSelect-select": {
                      padding: "14px 16px",
                      fontSize: "16px",
                      color: selectedOption ? "#111827" : "#9ca3af",
                    },
                  }}
                >
                  <MuiMenuItem
                    value=""
                    sx={{ color: "#9ca3af", fontSize: "16px" }}
                  >
                    Choose Option
                  </MuiMenuItem>
                  {item.options.map((option) => (
                    <MuiMenuItem
                      key={option.id}
                      value={option.id}
                      sx={{
                        fontSize: "16px",
                        padding: "12px 16px",
                        "&:hover": {
                          backgroundColor: "#f9fafb",
                        },
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-gray-900">{option.name}</span>
                        <span className="text-red-600 font-semibold ml-4">
                          + {option.price}$
                        </span>
                      </div>
                    </MuiMenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}

          {/* Special Request */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2">
              Special Request
            </label>
            <TextField
              multiline
              rows={3}
              fullWidth
              placeholder="Tell Us If You Have: An Allergy, An Ingredient You Don't Like, Etc."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e5e7eb",
                  },
                  "&:hover fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#dc2626",
                  },
                },
              }}
            />
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center gap-4 mt-auto">
            {/* Add to Cart Button */}
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{
                flex: 1,
                backgroundColor: "#dc2626",
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#b91c1c",
                },
              }}
            >
              Add to Cart {totalPrice}$
            </Button>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2">
              <IconButton
                onClick={handleDecrement}
                size="small"
                sx={{ color: "#dc2626" }}
              >
                <RemoveIcon />
              </IconButton>
              <span className="text-lg font-semibold w-8 text-center">
                {quantity}
              </span>
              <IconButton
                onClick={handleIncrement}
                size="small"
                sx={{ color: "#dc2626" }}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MenuItemDialog;
