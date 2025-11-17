import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { Button, TextField } from "@mui/material";
import AuthLayout from "../../../shared/layout/auth-layout";
import { useNavigate } from "react-router-dom";
import StepIndicator from "../components/sign-up-form/step-indicator";

const RegisterStep2: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/sign-up/step3");
  };
  return (
    <AuthLayout>
      {/* Progress Steps */}
      <StepIndicator currentStep={2} />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Tell us about <span className="text-red-500">yourself</span>
      </h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your name <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              style: { backgroundColor: "white", borderRadius: 8 },
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your email <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              style: { backgroundColor: "white", borderRadius: 8 },
            }}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your phone <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            inputClass="!w-full !h-[56px] !text-base !border !border-gray-300 !rounded-lg"
            buttonClass="!border !border-gray-300 !rounded-l-lg"
          />
        </div>

        {/* Next Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleNext}
          sx={{
            backgroundColor: "#EF4444",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "10px",
            height: "48px",
            "&:hover": {
              backgroundColor: "#dc2626",
            },
          }}
        >
          Next
        </Button>
      </form>

      {/* Already have an account */}
      <p className="text-center text-gray-600 text-sm mt-6">
        You already have an account?{" "}
        <a href="/login" className="text-red-500 font-medium hover:underline">
          Log in
        </a>
      </p>
    </AuthLayout>
  );
};

export default RegisterStep2;
