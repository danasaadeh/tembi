import React from "react";
import AuthLayout from "../../../shared/layout/auth-layout";
import RestaurantFormStep1 from "../components/sign-up-form/restaurant-form-step1";

const RegisterStep1: React.FC = () => {
  return (
    <AuthLayout>
      <RestaurantFormStep1 />
    </AuthLayout>
  );
};

export default RegisterStep1;
