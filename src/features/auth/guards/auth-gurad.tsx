import { Navigate } from "react-router";

import { useIsLoggedIn } from "../hooks/is-logged-in";
import type { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthPageGuard({ children }: AuthGuardProps) {
  const { isLoggedIn } = useIsLoggedIn();

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace />;
}

export function AuthComponentGuard({ children }: AuthGuardProps) {
  const { isLoggedIn } = useIsLoggedIn();

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return null;
}
