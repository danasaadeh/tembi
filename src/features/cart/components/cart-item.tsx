import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CartItemProps {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  image,
  price,
  oldPrice,
  discount,
  quantity,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
      {/* Left Check */}
      <div className="flex items-center">
        <CheckCircleIcon className="text-red-500" />
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>

        <div className="mt-1 text-sm">
          {discount && (
            <span className="text-yellow-500 font-semibold mr-3">
              {discount}%
            </span>
          )}
          {oldPrice && (
            <span className="text-gray-400 line-through mr-3">{oldPrice}$</span>
          )}
        </div>

        <p className="text-red-500 font-bold text-xl mt-1">{price}$</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded">
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded">
          +
        </button>
      </div>

      {/* Delete Icon */}
      <DeleteIcon className="text-red-500 cursor-pointer" />
    </div>
  );
};

export default CartItem;
