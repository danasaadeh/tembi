import React from "react";
import { Button } from "@mui/material";
import AuthLayout from "../../../shared/layout/auth-layout";
import StepIndicator from "../components/sign-up-form/step-indicator";

const RegisterSuccess: React.FC = () => {
  return (
    <AuthLayout>
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-green-500 mb-6">
          Congratulation!
        </h1>

        {/* Step Indicator */}
        <StepIndicator currentStep="success" />

        {/* Success Message */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-500">
            Your account has created successfully!
          </h2>
          <p className=" text-gray-900 mt-3 font-semibold text-2xl ">
            Get your restaurant started
          </p>
        </div>

        {/* Verification Message */}
        <div className="text-black text-sm mt-8">
          <p>
            A verification code has been sent to your email.Please verify your
            account via email.
          </p>

          <Button
            variant="text"
            color="error"
            className="mt-2 font-medium normal-case"
            onClick={() => (window.location.href = "https://mail.google.com")}
          >
            Open my email
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterSuccess;
