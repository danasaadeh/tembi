import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

type LoginDialogProps = {
  open: boolean;
  onClose: () => void;
  onLogin?: (email: string, password: string) => void;
  onContinueWithGoogle?: () => void;
  onContinueWithFacebook?: () => void;
};

export default function LoginDialog({
  open,
  onClose,
  onLogin,
  onContinueWithGoogle,
  onContinueWithFacebook,
}: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onLogin?.(email.trim(), password);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className:
          "!rounded-[18px] w-full max-w-[680px] md:max-w-[720px] mx-4 bg-white",
      }}
      BackdropProps={{ className: "bg-black/50" }}
    >
      <DialogContent className="p-6 md:p-10 flex justify-center">
        <Box className="flex flex-col items-center w-full max-w-[360px]">
          <Typography variant="h5" className="font-medium mb-8 text-center">
            Log in
          </Typography>

          <form className="w-full" onSubmit={submit}>
            <div className="space-y-7">
              <TextField
                fullWidth
                className="max-w-[360px] mx-auto"
                variant="outlined"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                InputProps={{ className: "rounded-md bg-gray-50" }}
              />

              <TextField
                fullWidth
                variant="outlined"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                InputProps={{
                  className: "rounded-md bg-gray-50",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((s) => !s)}
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="max-w-[360px] mx-auto !bg-red-600 !hover:!bg-red-700 !rounded-md py-2.5 text-white tracking-wide"
              >
                Log in
              </Button>

              <div className="flex items-center gap-3 my-4">
                <Divider className="flex-1" />
                <Typography variant="body2" className="text-gray-400 text-sm">
                  OR
                </Typography>
                <Divider className="flex-1" />
              </div>

              <Button
                fullWidth
                startIcon={<GoogleIcon />}
                variant="outlined"
                className="!rounded-md !text-black !border-gray-300 py-2 !bg-white hover:!bg-gray-50"
                onClick={onContinueWithGoogle}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                startIcon={<FacebookIcon />}
                variant="outlined"
                className="!rounded-md !text-black !border-gray-300 py-2 !bg-white hover:!bg-gray-50"
                onClick={onContinueWithFacebook}
              >
                Continue with Facebook
              </Button>

              <div className="text-center text-sm text-gray-600 mt-4">
                <span>New in termbi? </span>
                <button type="button" className="text-red-600 font-medium ml-1">
                  Create new account
                </button>
              </div>
            </div>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
