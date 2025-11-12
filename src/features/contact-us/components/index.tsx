import React from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-10">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          <span className="text-red-600">Contact</span> Us
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form className="flex flex-col gap-4">
          <TextField
            label="Name"
            variant="outlined"
            required
            fullWidth
            size="small"
          />
          <TextField label="Email" variant="outlined" fullWidth size="small" />
          <TextField
            label="Phone number"
            variant="outlined"
            required
            fullWidth
            size="small"
          />
          <TextField
            select
            label="How did you find us?"
            variant="outlined"
            fullWidth
            size="small"
            defaultValue=""
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="google">Google</MenuItem>
            <MenuItem value="friend">Friend</MenuItem>
            <MenuItem value="social">Social Media</MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="error"
            size="large"
            className="rounded-lg py-2 font-semibold"
          >
            SEND
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 flex flex-wrap gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <img src="src/assets/images/contact-us/phone.svg" />

            <div>
              <p className="font-semibold">PHONE</p>
              <p>+44 543 871 1234</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="src/assets/images/contact-us/phone2.svg" />
            <div>
              <p className="font-semibold">FAX</p>
              <p>+44 543 871 1234</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="src/assets/images/contact-us/mail.svg" />
            <div>
              <p className="font-semibold">EMAIL</p>
              <p>info@termbi.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="src/assets/images/contact-us/contact-us.svg"
          alt="Contact us illustration"
          className="rounded-2xl shadow-lg max-w-md w-full"
        />
      </motion.div>
    </div>
  );
};

export default ContactUs;
