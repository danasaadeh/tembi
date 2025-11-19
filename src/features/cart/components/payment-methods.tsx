import React from "react";

const PaymentMethods = () => {
  const logos = [
    "src/assets/images/payment/visa.svg",
    "src/assets/images/payment/masterCard.svg",
    "src/assets/images/payment/paypal.svg",
    "src/assets/images/payment/payoneer.svg",
    "src/assets/images/payment/G pay.svg",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6 w-full">
      <h3 className="text-lg font-semibold mb-4">We Accept</h3>

      <div className="flex flex-wrap items-center gap-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="w-16 object-contain"
            alt="payment"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
