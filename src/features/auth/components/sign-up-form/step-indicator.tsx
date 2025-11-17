import React from "react";
import { Link } from "react-router-dom";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [1, 2, 3];
  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      {steps.map((step) => (
        <React.Fragment key={step}>
          <Link to={`/sign-up/step${step}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                currentStep === step ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              {step}
            </div>
          </Link>
          {step < steps.length && (
            <div className="w-10 h-[2px] bg-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
