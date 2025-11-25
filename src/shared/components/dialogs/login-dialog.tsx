import { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import * as yup from "yup";
import { useLoginMutation } from "../../../features/auth/services/mutations";

// Simple password validation (only digits, between 6 to 20 characters)
const simplePasswordRegex = /^[0-9]{6,20}$/;

const loginFormSchemaValidation = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .matches(simplePasswordRegex, "Password must be at least 6 digits long.")
    .max(20, "Password cannot exceed 20 characters"),
});

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  onCreateAccount?: () => void;
}

export default function LoginDialog({
  open,
  onClose,
  onCreateAccount,
}: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // For success/error snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // Destructure useMutation hook
  const { mutate, isPending, isError, error } = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form using the Yup schema
    try {
      await loginFormSchemaValidation.validate(
        { email, password },
        { abortEarly: false }
      );

      // If validation succeeds, trigger the mutation
      mutate(
        { email, password },
        {
          onSuccess: () => {
            setSnackbarMessage("Login successful!");
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
            onClose(); // Close the dialog on success
          },
          onError: (err) => {
            setSnackbarMessage("Login failed. Please check your credentials.");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
          },
        }
      );
    } catch (validationError) {
      setSnackbarMessage("Invalid input. Please check your credentials.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleGoogleLogin = () => {
    // Add Google OAuth logic here
    console.log("Login with Google");
  };

  const handleFacebookLogin = () => {
    // Add Facebook OAuth logic here
    console.log("Login with Facebook");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className: "rounded-3xl",
        sx: {
          width: { xs: "90%", sm: "500px" },
          maxWidth: "600px",
          borderRadius: "24px",
        },
      }}
    >
      <DialogContent className="px-6 py-10 sm:px-12 sm:py-14">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Log in
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-10">
          {/* Email Field */}
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#e5e7eb",
                },
                "&:hover fieldset": {
                  borderColor: "#d1d5db",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#9ca3af",
                  borderWidth: "1px",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "14px 16px",
              },
              mb: 3,
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            InputProps={{
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
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#e5e7eb",
                },
                "&:hover fieldset": {
                  borderColor: "#d1d5db",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#9ca3af",
                  borderWidth: "1px",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "14px 16px",
              },
              mb: 3,
            }}
          />

          {/* Login Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isPending}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 rounded-lg normal-case text-base shadow-none"
            sx={{
              backgroundColor: "#dc2626",
              "&:hover": {
                backgroundColor: "#b91c1c",
              },
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              padding: "14px",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            {isPending ? <CircularProgress size={24} /> : "Log in"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <Divider className="flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <Divider className="flex-1" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleLogin}
            startIcon={<GoogleIcon />}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg normal-case text-base"
            sx={{
              borderColor: "#e5e7eb",
              color: "#374151",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
              padding: "12px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#f9fafb",
                borderColor: "#e5e7eb",
              },
              mb: 3,
            }}
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleFacebookLogin}
            startIcon={<FacebookIcon />}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg normal-case text-base"
            sx={{
              borderColor: "#e5e7eb",
              color: "#374151",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
              padding: "12px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#f9fafb",
                borderColor: "#e5e7eb",
              },
            }}
          >
            Continue with Facebook
          </Button>
        </div>

        {/* Create Account Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">New to Termbi? </span>
          <button
            type="button"
            onClick={onCreateAccount}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Create new account
          </button>
        </div>
      </DialogContent>

      {/* Snackbar for Success/Error Messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}
