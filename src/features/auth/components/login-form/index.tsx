import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../shared/layout/auth-layout";
import { useLoginMutation } from "../../services/mutations";
import { loginFormSchemaValidation } from "../login-form/config";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, error } = useLoginMutation();

  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data using Yup schema
    loginFormSchemaValidation
      .validate({ email, password }, { abortEarly: false })
      .then((validData) => {
        // Call the login mutation with the valid data
        mutate(validData, {
          onSuccess: () => {
            // Set success message
            setSnackbarMessage("Login successful!");
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
            // Redirect to the home page after successful login
            navigate("/home");
          },
          onError: (err) => {
            // Set error message
            setSnackbarMessage("Login failed. Please try again.");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
          },
        });
      })
      .catch((validationError) => {
        // Handle validation errors
        setSnackbarMessage("Invalid input. Please check your credentials.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Log in
        </h1>
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
            disabled={isPending} // Disable button while loading
          >
            {isPending ? <CircularProgress size={24} /> : "Log in"}
          </Button>
        </form>

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

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </AuthLayout>
  );
};

export default Login;
