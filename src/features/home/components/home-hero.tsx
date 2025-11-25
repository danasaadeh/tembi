import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import RoomIcon from "@mui/icons-material/Room";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "src/assets/images/chef.jpg", alt: "Chef at work" },
  { src: "src/assets/images/empty-rest.jpg", alt: "Restaurant interior" },
  { src: "src/assets/images/Component 2.png", alt: "Delicious food" },
];

export default function HomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleReserve = () => {
    navigate("/reserve-details");
  };
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6 max-w-xl z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Best <span className="text-red-600">Food</span>, Best{" "}
            <span className="text-red-600">Services</span>!
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Sandwiches, Fries & Burger with best taste awaits you.
          </p>

          {/* LOCATION */}
          <div className="flex items-center gap-3 text-base md:text-lg text-gray-800">
            <RoomIcon sx={{ color: "red", fontSize: "28px" }} />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-red-600 transition-colors"
            >
              2255 Nw 2nd Ave, Miami, FL 37214
            </a>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-800 text-lg">Rating:</span>
            <div className="flex text-yellow-500 text-xl">★★★★★</div>
            <span className="text-gray-700 font-medium">5.0</span>
          </div>

          {/* CTA */}
          <Button
            onClick={handleReserve}
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              padding: "14px 32px",
              fontSize: "1.125rem",
              fontWeight: 600,
              borderRadius: "12px",
              width: { xs: "100%", sm: "300px" },
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(239, 68, 68, 0.4)",
              "&:hover": {
                backgroundColor: "#dc2626",
                boxShadow: "0 6px 20px rgba(239, 68, 68, 0.5)",
              },
            }}
          >
            Reserve a table
          </Button>
        </motion.div>

        {/* RIGHT IMAGE SLIDER - Positioned more to the right */}
        <div className="relative flex-1 w-full lg:flex-[1.2] flex justify-center lg:justify-end items-center lg:-mr-12 xl:-mr-24">
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 10 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
              >
                <img
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-red-100 via-orange-50 to-red-50 -z-10 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
