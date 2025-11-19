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
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { appRoutes } from "../../../routes"; // Keep this if you're managing routes from an external file

const Navbar: React.FC<{
  onOpenLogin: () => void;
  // onOpenSignup: () => void
}> = ({
  onOpenLogin,
  // onOpenSignup
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      className="bg-[#1e1e1e] shadow-none"
      sx={{
        backgroundColor: "#1e1e1e",
        boxShadow: "none",
      }}
    >
      <Toolbar className="flex justify-between items-center px-4 md:px-16 min-h-[64px]">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src="src/assets/images/logo2.svg" width="150px" alt="Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm">
          <Link
            to="/reserve-details"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <button
            className="text-gray-300 hover:text-red-500"
            onClick={() => {
              onOpenLogin();
              // onOpenSignup();
              setMobileOpen(false);
            }}
          >
            Services
          </button>

          {/* <Link
            to="/home"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Services
          </Link> */}
          <Link
            to="/about"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              className="w-5 h-4 rounded-sm"
            />
            <IconButton
              size="small"
              onClick={handleMenuOpen}
              className="text-gray-300 hover:text-red-500"
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

          {/* Login Button */}
          <Link to="/login">
            {" "}
            {/* Wrap the Login button in Link */}
            <Button
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
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-[#1e1e1e] flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
          <Link
            to="/"
            className="text-gray-300 hover:text-red-500"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:text-red-500"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-red-500"
            onClick={() => setMobileOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-red-500"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
