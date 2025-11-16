import { lazy } from "react";

const HomePage = lazy(() => import("../pages/index"));

export const homeRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
];
