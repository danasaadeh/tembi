import { lazy } from "react";

const AboutUsPage = lazy(() => import("../pages/index"));

export const aboutRoutes = [
  {
    path: "/about",
    element: <AboutUsPage />,
  },
];
