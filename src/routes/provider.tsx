import {
  createBrowserRouter,
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"; // <-- note: react-router-dom, not react-router
import { lazy } from "react";
import { LayoutContainer } from "../shared/layout/layout-container";
import { authRoutes } from "../features/auth/routes";
import { contactRoutes } from "../features/contact-us/routes";
import { aboutRoutes } from "../features/about-us/routes";

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
      ...contactRoutes,
      ...aboutRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
