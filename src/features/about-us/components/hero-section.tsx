import React from "react";
import { Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('src/assets/images/hero/heroImage.svg')", // replace with your actual image path
      }}
    >
      {/* Overlay (optional for better text contrast) */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-8 md:px-16 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Get your own <br />
          <span className="text-red-500">restaurant website</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Termbi’s booking solution for restaurants makes a lot of your daily
          business tasks much easier, so that you can fully focus on your
          guests.
        </p>
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{ fontWeight: "bold", textTransform: "none" }}
        >
          Try Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
