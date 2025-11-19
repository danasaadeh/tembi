import { lazy } from "react";

const ReserveDetailsPage = lazy(() => import("../pages/index"));

export const reserveRoutes = [
  {
    path: "/reserve-details",
    element: <ReserveDetailsPage />,
  },
];
