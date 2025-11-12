import React from "react";
import { Button } from "@mui/material";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: ["Services", "Services", "Services", "Services", "Services"],
    highlight: false,
    bgColor: "bg-pink-50",
    topColor: "bg-pink-100",
  },
  {
    title: "Premium",
    price: "$45",
    features: [
      "Reservation",
      "Ordering",
      "Marketing",
      "Services",
      "Services",
      "Services",
    ],
    highlight: true,
    bgColor: "bg-white",
    topColor: "bg-red-500",
  },
  {
    title: "Enterprise",
    price: "$75",
    features: ["Services", "Services", "Services", "Services", "Services"],
    highlight: false,
    bgColor: "bg-pink-50",
    topColor: "bg-pink-100",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center px-6">
      <h2 className="text-3xl font-semibold mb-14 text-center">
        <span className="text-red-500">Pricing</span> Packages
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative w-72 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl group ${plan.bgColor}`}
          >
            {/* Top curved section */}
            <div
              className={`relative h-44 ${
                plan.topColor
              } flex flex-col justify-center items-center transition-colors duration-500 ${
                plan.highlight
                  ? "group-hover:bg-red-600"
                  : "group-hover:bg-red-300"
              }`}
            >
              {/* Smooth Half Circle Curve */}
              <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden">
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="w-full h-[80px]"
                >
                  {/* This path makes a smooth half-circle */}
                  <path
                    d="M0,150 Q180,0 500,150 L500,150 L0,150 Z"
                    className="fill-white"
                  />
                </svg>
              </div>

              <h3
                className={`text-xl font-semibold z-10 ${
                  plan.highlight ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`text-3xl font-bold z-10 ${
                  plan.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.price}
                <span className="text-base font-medium ml-1">/month</span>
              </p>
            </div>

            {/* Features */}
            <div className="px-8 py-8 text-center">
              <ul className="space-y-3 text-gray-700 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-red-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  backgroundColor: plan.highlight ? "#EF4444" : "#fde8e8",
                  color: plan.highlight ? "#fff" : "#3d3d3d",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#EF4444",
                    color: "#fff",
                  },
                }}
              >
                Select Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
