import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes";

const Navbar: React.FC<{
  onOpenSignup: () => void;
}> = ({ onOpenSignup }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate(appRoutes.auth.login);
  };

  const handleProfile = () => {
    navigate(appRoutes.profile);
  };

  return (
    <AppBar
      position="static"
      className="bg-[#1e1e1e] shadow-none"
      sx={{ backgroundColor: "#1e1e1e", boxShadow: "none" }}
    >
      <Toolbar className="flex justify-between items-center px-4 md:px-16 min-h-[64px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/assets/images/logo2.svg"
            width="150px"
            alt="Logo"
            className="cursor-pointer"
            onClick={() => navigate(appRoutes.home)}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <Link
            to={appRoutes.home}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Home
          </Link>

          <button
            className="text-gray-300 hover:text-red-500"
            onClick={onOpenSignup}
          >
            Services
          </button>

          <Link
            to={appRoutes.about}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            About us
          </Link>

          <Link
            to={appRoutes.contact}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Language */}
          <div className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              className="w-5 h-4 rounded-sm"
            />
            <IconButton
              size="small"
              onClick={handleMenuOpen}
              sx={{ color: "white" }}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: { backgroundColor: "#2c2c2c", color: "#fff" },
              }}
            >
              <MenuItem onClick={handleMenuClose}>🇬🇧 English</MenuItem>
              <MenuItem onClick={handleMenuClose}>🇫🇷 French</MenuItem>
              <MenuItem onClick={handleMenuClose}>🇸🇦 Arabic</MenuItem>
            </Menu>
          </div>

          {/* Login */}
          <Button
            onClick={handleLogin}
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              textTransform: "none",
              borderRadius: "6px",
              px: 3,
              "&:hover": {
                borderColor: "#f87171",
                backgroundColor: "#f8717115",
              },
            }}
          >
            Log in
          </Button>

          {/* Profile Icon */}
          <IconButton
            onClick={handleProfile}
            sx={{
              color: "white",
              "&:hover": {
                color: "#f87171",
                backgroundColor: "#f8717115",
              },
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
