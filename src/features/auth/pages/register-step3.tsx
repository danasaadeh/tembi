import React, { useState } from "react";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "../../../shared/layout/auth-layout";
import { useNavigate } from "react-router-dom";
import StepIndicator from "../components/sign-up-form/step-indicator";

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

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sign-up/success");
  };

  return (
    <AuthLayout>
      {/* Progress Steps */}
      <StepIndicator currentStep={3} />

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
