import { lazy } from "react";

const ContactUsPage = lazy(() => import("../pages/index"));

export const contactRoutes = [
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
];
