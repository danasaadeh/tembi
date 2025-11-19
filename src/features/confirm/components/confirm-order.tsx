import React from "react";
import { Link } from "react-router-dom";

import CheckIcon from "@mui/icons-material/Check";
import Breadcrumbs from "../../../shared/components/breadcrumb";

const ConfirmOrder: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-10">
      {/* Breadcrumbs */}
      <div className="w-full max-w-4xl mb-6">
        <Breadcrumbs
          items={[
            { label: "Cart", to: "/cart" },
            { label: "Checkout", to: "/checkout" },
            { label: "Place order", to: "/place-order" },
            { label: "Confirm Order" },
          ]}
          activeIndex={3}
        />
      </div>

      {/* Success Icon */}
      <div className="flex justify-center my-10">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-red-200 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                <CheckIcon className="text-white !text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-8">
        Confirmation ordered Successfully
      </h1>

      {/* Go Home Button */}
      <Link to="/" className="w-full max-w-xs">
        <button className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold text-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ConfirmOrder;
