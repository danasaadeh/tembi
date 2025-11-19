import { lazy } from "react";

const CheckOutPage = lazy(() => import("../pages/index"));

export const checkoutRoutes = [
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
];
