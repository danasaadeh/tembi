import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white px-6 flex flex-col items-center">
      <div className="max-w-5xl text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl text-center font-semibold mb-20">
            termbi <span className="text-red-500">Features</span>
          </h2>
          <h3 className="text-xl font-bold mb-2">Dashboard</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="src/assets/images/dashboard.png"
            alt="Dashboard preview"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
