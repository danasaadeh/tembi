import { lazy } from "react";

const MyBookingsPage = lazy(() => import("../pages/index"));

export const bookingRoutes = [
  {
    path: "/booking",
    element: <MyBookingsPage />,
  },
];
