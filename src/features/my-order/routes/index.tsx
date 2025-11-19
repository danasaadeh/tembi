import { lazy } from "react";

const MyOrderPage = lazy(() => import("../pages/index"));

export const orderRoutes = [
  {
    path: "/order",
    element: <MyOrderPage />,
  },
];
