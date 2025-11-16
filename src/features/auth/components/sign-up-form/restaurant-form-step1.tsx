import React from "react";
import { Button, TextField } from "@mui/material";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import StepIndicator from "./step-indicator";

const RestaurantFormStep1: React.FC = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <div>
      {/* Step Indicator */}
      <StepIndicator currentStep={1} />

      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Tell us about your restaurant
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Restaurant name <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter restaurant name"
            size="small"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Restaurant address <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter restaurant address"
            size="small"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Restaurant phone <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
            }}
          />
        </div>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: "#EF4444",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#dc2626" },
            borderRadius: "8px",
          }}
        >
          Next
        </Button>
      </form>

      <p className="text-center mt-4 text-gray-600">
        You already have an account?{" "}
        <a href="/login" className="text-red-500 font-medium hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
};

export default RestaurantFormStep1;
