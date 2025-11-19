import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

interface StepIndicatorProps {
  currentStep: number | "success";
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  // Explicit literal typing to avoid TS widening "success" to just string
  const steps: Array<number | "success"> = [1, 2, 3, "success"];

  const getRoute = (step: number | "success") => {
    return step === "success" ? "/sign-up/success" : `/sign-up/step${step}`;
  };

  const isActive = (step: number | "success") => currentStep === step;

  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      {steps.map((step, index) => {
        const active = isActive(step);
        const isSuccess = step === "success";

        return (
          <React.Fragment key={step}>
            <Link to={getRoute(step)}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold
                ${active ? "bg-red-500 text-white" : "bg-gray-300 text-white"}`}
              >
                {isSuccess ? <CheckIcon fontSize="small" /> : step}
              </div>
            </Link>

            {index < steps.length - 1 && (
              <div className="w-10 h-[2px] bg-gray-300"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
