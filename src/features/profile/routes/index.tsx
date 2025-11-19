import { lazy } from "react";

const ManageProfilePage = lazy(() => import("../pages/index"));

export const profileRoutes = [
  {
    path: "/profile",
    element: <ManageProfilePage />,
  },
];
