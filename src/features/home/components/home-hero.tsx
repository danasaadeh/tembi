import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import RoomIcon from "@mui/icons-material/Room";

export default function HomeHero() {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 gap-10">
      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Best <span className="text-red-600">Food</span>, Best{" "}
          <span className="text-red-600">Services</span>!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Sandwiches, Fries & Burger with best taste awaits you.
        </p>

        <p className="text-gray-600">Taste awaits you.</p>

        {/* LOCATION */}
        <div className="flex items-center gap-3 text-lg text-gray-800">
          <RoomIcon sx={{ color: "red" }} />
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-red-600"
          >
            2255 NW 2nd Ave, Miami, FL 37214
          </a>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">Rating:</span>
          <div className="flex text-yellow-500 text-xl">★★★★★</div>
          <span className="text-gray-600">5.0</span>
        </div>

        {/* CTA */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            padding: "12px 28px",
            fontSize: "1rem",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#b91c1c" },
          }}
        >
          Reserve a table
        </Button>
      </div>

      {/* RIGHT IMAGE SLIDER (STATIC FOR NOW) */}
      <div className="flex-1 w-full flex justify-center items-center">
        <motion.div
          className="w-full max-w-xl aspect-square rounded-full overflow-hidden shadow-xl"
          animate={{ opacity: [0, 1], scale: [0.95, 1] }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="src/assets/images/Component 2.png"
            alt="Food Slide"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
