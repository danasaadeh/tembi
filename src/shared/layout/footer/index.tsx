import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div>
          <img src="public/images/logo.svg" className="mb-5" width="150px" />
          <p className="text-sm mb-4">Keep in touch</p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-red-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-red-500">
              <Instagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <Twitter />
            </a>
          </div>
          <p className="text-xs mt-5 text-gray-400">
            Provided by{" "}
            <span className="text-red-500 font-medium">
              term<span className="text-white">bi</span>
            </span>
          </p>
          <a
            href="https://www.term bi.com"
            className="text-sm hover:text-red-500"
          >
            www.termbi.com
          </a>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm">
            <li>➡ 08 AM to 12 AM (Mon – Fri)</li>
            <li>➡ 11 AM to 10 PM (Sat & Sun)</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-red-500">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/reserve" className="hover:text-red-500">
                Reserve a Table
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Newsletters</h3>
          <p className="text-sm mb-4">
            Stay up to date with our latest news and exclusive deals.
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3, // 3 * 8px = 24px gap (uses MUI’s spacing system)
            }}
            className="flex flex-col space-y-6"
          >
            <TextField
              size="small"
              placeholder="Enter your email address"
              variant="outlined"
              className="bg-white rounded-md"
            />
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "none", borderRadius: "8px" }}
            >
              Subscribe
            </Button>
          </Box>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright © 2024 | termbi</p>
        <div className="flex space-x-3 mt-3 md:mt-0">
          <Facebook fontSize="small" />
          <Instagram fontSize="small" />
          <Twitter fontSize="small" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
