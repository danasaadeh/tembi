import React, { useState, type ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

import { useLocation } from "react-router-dom";
import SignupDialog from "../../components/dialogs/sign-up-dialog";
import LoginDialog from "../../components/dialogs/login-dialog";

interface LayoutContainerProps {
  children: ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  const location = useLocation();

  // Add state to control dialog
  // const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar gets callback to open dialog */}
      <Navbar
        // onOpenSignup={() => setOpenSignup(true)}
        onOpenLogin={() => setOpenLogin(true)}
      />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      <Footer />

      {/* Render signup dialog */}
      {/* <SignupDialog open={openSignup} onClose={() => setOpenSignup(false)} /> */}
      <LoginDialog open={openLogin} onClose={() => setOpenLogin(false)} />
    </div>
  );
}
