import { lazy } from "react";
import { LayoutContainer } from "../../../shared/layout/layout-container";

// const SignUpPage = lazy(() => import("../pages/sign-up"));
const LoginPage = lazy(() => import("../pages/login"));
const RegisterStep1 = lazy(() => import("../pages/register-step1"));
const RegisterStep2 = lazy(() => import("../pages/register-step2"));
const RegisterStep3 = lazy(() => import("../pages/register-step3"));
const RegisterSuccess = lazy(() => import("../pages/register-success"));

export const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up/step1",
    element: <RegisterStep1 />,
  },
  {
    path: "/sign-up/step2",
    element: <RegisterStep2 />,
  },
  {
    path: "/sign-up/step3",
    element: <RegisterStep3 />,
  },
  {
    path: "/sign-up/success",
    element: <RegisterSuccess />,
  },
];
