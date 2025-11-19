import React from "react";

import { TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import Breadcrumbs from "../../../shared/components/breadcrumb";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function
  const handleNext = () => {
    navigate("/place-order"); // Navigate to the next step
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-8">
      <div className="w-full max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Cart", to: "/cart" },
            { label: "Checkout", to: "/checkout" },
            { label: "Place order" },
            { label: "Confirm Order" },
          ]}
          activeIndex={1}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Payment Details */}
          <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold mb-6 text-center md:text-left">
              Payment Details
            </h2>

            {/* Cardholder Name */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Cardholder Name
              </label>
              <TextField
                fullWidth
                placeholder="Enter Cardholder name"
                size="small"
              />
            </div>

            {/* Card Number */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <TextField
                fullWidth
                placeholder="0000-0000-0000-0000"
                size="small"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Expiration */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiration Date
                </label>
                <TextField fullWidth placeholder="MM/YYYY" size="small" />
              </div>

              {/* CVV */}
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <TextField fullWidth placeholder="123" size="small" />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold text-sm"
            >
              Place order
            </button>
          </div>

          {/* Order Summary + Payment Methods */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

              <div className="flex justify-between text-sm mb-3">
                <span>Total Price</span>
                <span className="text-red-500 font-medium">510$</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Delivery</span>
                <span className="text-red-500 font-medium">30$</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-base font-semibold">
                <span>Grand Total</span>
                <span className="text-red-500">540$</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">
                Choose Payment Method
              </h3>

              <RadioGroup defaultValue="credit">
                <FormControlLabel
                  value="paypal"
                  control={<Radio size="small" />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="credit"
                  control={<Radio size="small" />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="google"
                  control={<Radio size="small" />}
                  label="Google Pay"
                />
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
