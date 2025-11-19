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
import { homeRoutes } from "../features/home/routes";
import { cartRoutes } from "../features/cart/routes";
import { checkoutRoutes } from "../features/check-out/routes";
import { placeOrderRoutes } from "../features/place-order/routes";
import { confirmRoutes } from "../features/confirm/routes";
import { profileRoutes } from "../features/profile/routes";
import { orderRoutes } from "../features/my-order/routes";
import { bookingRoutes } from "../features/my-bookings/routes";
import { reviewRoutes } from "../features/my-reviews/routes";
import { reserveRoutes } from "../features/reserve-details/routes";

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
      ...homeRoutes,
      ...cartRoutes,
      ...checkoutRoutes,
      ...placeOrderRoutes,
      ...confirmRoutes,
      ...profileRoutes,
      ...orderRoutes,
      ...bookingRoutes,
      ...reviewRoutes,
      ...reserveRoutes,

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
