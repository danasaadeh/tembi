import { lazy } from "react";

const PlaceOrderPage = lazy(() => import("../pages/index"));

export const placeOrderRoutes = [
  {
    path: "/place-order",
    element: <PlaceOrderPage />,
  },
];
