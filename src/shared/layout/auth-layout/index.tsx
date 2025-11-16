import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-red-50 px-6 md:px-16 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Illustration Section */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-white relative">
        {/* Logo and Title */}
        <div className="absolute top-10 text-center">
          <img src="public/images/logo.svg" width="200px"></img>
          <p className="text-gray-500  text-sm mt-5">
            Restaurants Management System
          </p>
        </div>

        {/* Illustration Image */}
        <img
          src="/src/assets/images/register/register.svg"
          alt="Restaurant Illustration"
          className="max-w-md w-full h-auto mt-20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
