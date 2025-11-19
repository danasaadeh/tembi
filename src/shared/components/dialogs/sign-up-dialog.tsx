import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupDialog({ open, onClose }: SignupDialogProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        className: "rounded-2xl",
      }}
    >
      <DialogContent className="p-6">
        {/* Animated intro */}
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
              variant="outlined"
              size="medium"
            />

            {/* Email */}
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              size="medium"
            />

            {/* Password with toggle */}
            <div className="relative w-full">
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                size="medium"
              />
              <IconButton
                onClick={() => setShowPassword((p) => !p)}
                className="!absolute right-2 top-2 z-10"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>

            {/* Sign Up button */}
            <Button
              variant="contained"
              fullWidth
              className="!bg-red-600 !py-3 !text-white rounded-lg hover:!bg-red-700 transition-all"
            >
              Sign up
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <Divider className="flex-1" />
              <span className="text-sm text-gray-500">OR</span>
              <Divider className="flex-1" />
            </div>

            {/* Google login */}
            <Button
              variant="outlined"
              fullWidth
              className="py-3 flex items-center gap-2 rounded-lg border-gray-300"
            >
              <Google fontSize="small" /> Continue with Google
            </Button>

            {/* Facebook login */}
            <Button
              variant="outlined"
              fullWidth
              className="py-3 flex items-center gap-2 rounded-lg border-gray-300"
            >
              <Facebook fontSize="small" /> Continue with Facebook
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <button
              onClick={() => {
                console.log("Open login dialog here");
              }}
              className="text-red-600 font-medium hover:underline"
            >
              Log in
            </button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
