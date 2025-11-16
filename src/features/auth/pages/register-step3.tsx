import React, { useState } from "react";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "../../../shared/layout/auth-layout";

const RegisterStep3: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Registration final step logic here
    console.log("Registration data:", formData);
  };

  return (
    <AuthLayout>
      {/* Progress Steps */}
      <div className="flex justify-center items-center mb-10">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
            1
          </div>
          <div className="w-20 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
            2
          </div>
          <div className="w-20 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 3 (Active) */}
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
            3
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Set your <span className="text-red-500">password</span>
      </h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              style: { backgroundColor: "white", borderRadius: 8 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Confirm password <span className="text-red-500">*</span>
          </label>
          <TextField
            fullWidth
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              style: { backgroundColor: "white", borderRadius: 8 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm(!showConfirm)}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* Register Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleSubmit}
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
          Register
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

export default RegisterStep3;
