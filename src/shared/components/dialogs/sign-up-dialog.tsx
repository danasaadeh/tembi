import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Divider,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import { signupFormSchema } from "./config";
import { useSignUpMutation } from "../../../features/auth/services/mutations";

interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

export default function SignupDialog({
  open,
  onClose,
  onSwitchToLogin,
}: SignupDialogProps) {
  const [showPassword, setShowPassword] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Local error state for Yup messages
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleCloseSnackbar = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  // React Query Mutation
  const { mutate: signUp, isPending } = useSignUpMutation();

  // Submit handler
  const handleSubmit = async () => {
    try {
      setErrors({});
      await signupFormSchema.validate(
        { name, email, phone, password },
        { abortEarly: false }
      );

      // Process name → first + last
      const parts = name.trim().split(" ");
      const first_name = parts[0];
      const last_name = parts.slice(1).join(" ") || " ";

      // Final payload
      const payload = {
        first_name,
        last_name,
        email,
        phone,
        password,
        password_confirmation: password,
      };

      signUp(payload, {
        onSuccess: () => {
          setSnackbar({
            open: true,
            message: "Account created! Please verify your email.",
            severity: "success",
          });

          onClose();
          onSwitchToLogin?.();
        },
        onError: (err: any) => {
          setSnackbar({
            open: true,
            message: err?.message || "Signup failed.",
            severity: "error",
          });
        },
      });
    } catch (validation: any) {
      const newErrors: Record<string, string> = {};
      validation.inner?.forEach((err: any) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);

      setSnackbar({
        open: true,
        message: "Please check the form for errors.",
        severity: "error",
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{ className: "rounded-2xl" }}
    >
      <DialogContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <DialogTitle className="text-center text-2xl font-semibold mb-4">
            Create an Account
          </DialogTitle>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />

            {/* Email */}
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Phone */}
            <TextField
              label="Phone Number"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
            />

            {/* Password */}
            <div className="relative w-full">
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <IconButton
                onClick={() => setShowPassword((p) => !p)}
                className="!absolute right-2 top-2 z-10"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>

            {/* Button */}
            <Button
              variant="contained"
              fullWidth
              disabled={isPending}
              onClick={handleSubmit}
              className="!bg-red-600 !py-3 !text-white rounded-lg hover:!bg-red-700"
            >
              {isPending ? <CircularProgress size={24} /> : "Sign up"}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <Divider className="flex-1" />
              <span className="text-sm text-gray-500">OR</span>
              <Divider className="flex-1" />
            </div>

            {/* Social */}
            <Button
              variant="outlined"
              fullWidth
              className="py-3 flex items-center gap-2 rounded-lg border-gray-300"
            >
              <Google fontSize="small" /> Continue with Google
            </Button>

            <Button
              variant="outlined"
              fullWidth
              className="py-3 flex items-center gap-2 rounded-lg border-gray-300"
            >
              <Facebook fontSize="small" /> Continue with Facebook
            </Button>
          </div>

          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-red-600 font-medium hover:underline"
            >
              Log in
            </button>
          </div>
        </motion.div>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </DialogContent>
    </Dialog>
  );
}
