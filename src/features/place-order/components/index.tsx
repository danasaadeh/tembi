import React from "react";
import Breadcrumbs from "../../../shared/components/breadcrumb";
import { useNavigate } from "react-router-dom";

const PlaceOrder: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function
  const handleNext = () => {
    navigate("/confirm"); // Navigate to the next step
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-10">
      <div className="w-full max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Cart", to: "/cart" },
            { label: "Checkout", to: "/checkout" },
            { label: "Place order", to: "/place-order" },
            { label: "Confirm Order" },
          ]}
          activeIndex={2} // highlight 'Place order' as active
        />
      </div>

      <div className="w-full max-w-4xl text-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-700">
          Your Order is Ready
        </h1>
      </div>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8 border border-gray-100">
        <h2 className="text-lg font-semibold text-red-600 mb-6 text-left">
          Order Summary
        </h2>

        <div className="space-y-6 text-sm">
          {/* Order Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-200 pb-4">
            <span className="text-gray-600">Order Code</span>
            <span className="text-gray-800 font-medium text-left md:text-right">
              55110022336644 - 55998811
            </span>
          </div>

          {/* Total Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-200 pb-4">
            <span className="text-gray-600">Total Price</span>
            <span className="text-red-500 font-semibold text-left md:text-right">
              540$
            </span>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-200 pb-4">
            <span className="text-gray-600">Name</span>
            <span className="text-gray-800 font-medium text-left md:text-right">
              Customer name
            </span>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-200 pb-4">
            <span className="text-gray-600">Phone</span>
            <span className="text-gray-800 font-medium text-left md:text-right">
              +44 526 584 5364
            </span>
          </div>

          {/* Delivery Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start border-b border-gray-200 pb-4">
            <span className="text-gray-600">Delivery address</span>
            <span className="text-gray-800 font-medium text-left md:text-right max-w-xs">
              Lorem Ipsum has been the industry's standard dummy
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl flex justify-center mt-10">
        <button
          onClick={handleNext}
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-lg font-semibold text-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
