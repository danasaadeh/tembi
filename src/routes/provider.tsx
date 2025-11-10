import {
  createBrowserRouter,
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"; // <-- note: react-router-dom, not react-router
import { lazy } from "react";
import { LayoutContainer } from "../shared/layout/layout-container";
import { authRoutes } from "../features/auth/routes";

const NotFoundPage = lazy(() => import("../shared/pages/not-found-page"));

const routes = [
  {
    path: "/",
    element: (
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    ),

    children: [
      ...authRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/E-commerce-d" });
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
