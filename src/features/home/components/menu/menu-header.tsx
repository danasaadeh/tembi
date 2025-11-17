import React from "react";

const MenuHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our <span className="text-red-600">Menu</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        Explore our special, tasteful dishes on the Restaurant Menu!
      </p>
    </div>
  );
};

export default MenuHeader;
