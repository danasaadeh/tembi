import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../shared/layout/auth-layout";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Integrate with axios + react-query
    console.log({ email, password });
    navigate("/home"); // Navigate to the next step
  };

  return (
    <AuthLayout>
      <div>
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Log in
        </h1>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "white",
                },
              }}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "white",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#E61E25",
              borderRadius: "8px",
              paddingY: "10px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#d11a20" },
            }}
          >
            Log in
          </Button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-gray-700 mt-6">
          New in termbi?{" "}
          <Link
            to="/sign-up/step1"
            className="text-red-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
