import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  total: number;
  delivery: number;
}

const OrderSummary: React.FC<Props> = ({ total, delivery }) => {
  const navigate = useNavigate(); // Get the navigate function
  const handleNext = () => {
    navigate("/checkout"); // Navigate to the next step
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Total Price</span>
        <span className="text-red-500 font-bold">{total}$</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Delivery</span>
        <span className="text-red-500 font-bold">{delivery}$</span>
      </div>

      <div className="border-t my-4"></div>

      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Grand Total</span>
        <span className="text-red-500 font-bold">{total + delivery}$</span>
      </div>

      <Button
        onClick={handleNext}
        fullWidth
        variant="contained"
        color="error"
        className="rounded-lg py-2"
      >
        Checkout
      </Button>
    </div>
  );
};

export default OrderSummary;
