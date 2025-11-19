import { lazy } from "react";

const MyReviewsPage = lazy(() => import("../pages/index"));

export const reviewRoutes = [
  {
    path: "/reviews",
    element: <MyReviewsPage />,
  },
];
