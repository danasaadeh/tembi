import { lazy } from "react";

const ConfirmOrderPage = lazy(() => import("../pages/index"));

export const confirmRoutes = [
  {
    path: "/confirm",
    element: <ConfirmOrderPage />,
  },
];
