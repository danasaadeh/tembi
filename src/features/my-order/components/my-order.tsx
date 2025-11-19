import React, { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Pagination } from "@mui/material";
import Breadcrumbs from "../../../shared/components/breadcrumb";
import ProfileSidebar from "../../profile/components/profile-side-bar";

// TypeScript interfaces
interface OrderProduct {
  id: string;
  image: string;
  name: string;
}

interface Order {
  id: string;
  products: OrderProduct[];
  date: string;
  amount: number;
}

const MyOrder: React.FC = () => {
  // Mock user data - Replace with actual data from Zustand store
  const user = {
    name: "Ahmad AL-Ahmad",
    avatar: "src/assets/images/profile/profile1.jpg",
  };

  // Mock orders data - Replace with React Query data
  const orders: Order[] = [
    {
      id: "11236687267",
      products: [
        { id: "1", image: "src/assets/images/order/shrim.jpg", name: "Pasta" },
        { id: "2", image: "src/assets/images/order/shrim.jpg", name: "Salad" },
      ],
      date: "20-07-2024",
      amount: 500,
    },
    {
      id: "11236687267",
      products: [
        {
          id: "1",
          image: "src/assets/images/order/pasta_vegan.jpg",
          name: "Noodles",
        },
      ],
      date: "20-07-2024",
      amount: 500,
    },
    {
      id: "11236687267",
      products: [
        {
          id: "1",
          image: "src/assets/images/order/vegan2.jpg",
          name: "Fresh Salad",
        },
      ],
      date: "20-07-2024",
      amount: 500,
    },
    {
      id: "11236687267",
      products: [
        { id: "1", image: "src/assets/images/order/juices.jpg", name: "Juice" },
      ],
      date: "20-07-2024",
      amount: 500,
    },
    {
      id: "11236687267",
      products: [
        {
          id: "1",
          image: "src/assets/images/order/vegan2.jpg",
          name: "Salad Bowl",
        },
      ],
      date: "20-07-2024",
      amount: 500,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState<{
    [key: string]: number;
  }>({});

  const handleSignOut = () => {
    // TODO: Implement sign out logic with Zustand
    console.log("Sign out clicked");
  };

  const handleNextProduct = (orderId: string, maxIndex: number) => {
    setCurrentProductIndex((prev) => ({
      ...prev,
      [orderId]: Math.min((prev[orderId] || 0) + 1, maxIndex),
    }));
  };

  const handlePrevProduct = (orderId: string) => {
    setCurrentProductIndex((prev) => ({
      ...prev,
      [orderId]: Math.max((prev[orderId] || 0) - 1, 0),
    }));
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    // TODO: Fetch data for the new page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "My Profile", to: "/profile" },
            { label: "My Order" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <ProfileSidebar user={user} onSignOut={handleSignOut} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Mobile User Header - Visible on mobile only */}
            <div className="lg:hidden bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </h3>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  My Order
                </h2>
              </div>

              {/* Table Header - Hidden on mobile */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                <div className="col-span-2">Order id</div>
                <div className="col-span-3">Products</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Details</div>
                <div className="col-span-1">Review</div>
              </div>

              {/* Orders List */}
              <div className="divide-y divide-gray-200">
                {orders.map((order, index) => {
                  const currentIndex = currentProductIndex[order.id] || 0;
                  const currentProduct = order.products[currentIndex];

                  return (
                    <div
                      key={`${order.id}-${index}`}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      {/* Desktop View */}
                      <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                        {/* Order ID */}
                        <div className="col-span-2 text-sm text-gray-600">
                          {order.id}
                        </div>

                        {/* Products with Navigation */}
                        <div className="col-span-3 flex items-center gap-2">
                          <button
                            onClick={() => handlePrevProduct(order.id)}
                            disabled={currentIndex === 0}
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronLeftIcon className="!w-5 !h-5 text-gray-600" />
                          </button>
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={currentProduct.image || "/placeholder.svg"}
                              alt={currentProduct.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            onClick={() =>
                              handleNextProduct(
                                order.id,
                                order.products.length - 1
                              )
                            }
                            disabled={
                              currentIndex === order.products.length - 1
                            }
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronRightIcon className="!w-5 !h-5 text-gray-600" />
                          </button>
                        </div>

                        {/* Date */}
                        <div className="col-span-2 text-sm text-gray-600">
                          {order.date}
                        </div>

                        {/* Amount */}
                        <div className="col-span-2 text-sm font-semibold text-gray-900">
                          {order.amount}$
                        </div>

                        {/* Details Link */}
                        <div className="col-span-2">
                          <button className="text-sm font-medium text-red-600 hover:text-red-700">
                            View details
                          </button>
                        </div>

                        {/* Review Link */}
                        <div className="col-span-1">
                          <button className="text-sm font-medium text-red-600 hover:text-red-700">
                            Review order
                          </button>
                        </div>
                      </div>

                      {/* Mobile View */}
                      <div className="md:hidden space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500">
                            Order ID:
                          </span>
                          <span className="text-sm text-gray-900">
                            {order.id}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handlePrevProduct(order.id)}
                            disabled={currentIndex === 0}
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30"
                          >
                            <ChevronLeftIcon className="!w-5 !h-5 text-gray-600" />
                          </button>
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={currentProduct.image || "/placeholder.svg"}
                              alt={currentProduct.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            onClick={() =>
                              handleNextProduct(
                                order.id,
                                order.products.length - 1
                              )
                            }
                            disabled={
                              currentIndex === order.products.length - 1
                            }
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30"
                          >
                            <ChevronRightIcon className="!w-5 !h-5 text-gray-600" />
                          </button>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-500">
                                Date:
                              </span>
                              <span className="text-sm text-gray-900">
                                {order.date}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-500">
                                Amount:
                              </span>
                              <span className="text-sm font-semibold text-gray-900">
                                {order.amount}$
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 text-sm font-medium text-red-600 hover:text-red-700 py-2 border border-red-600 rounded-lg">
                            View details
                          </button>
                          <button className="flex-1 text-sm font-medium text-red-600 hover:text-red-700 py-2 border border-red-600 rounded-lg">
                            Review order
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="flex justify-center py-6 border-t border-gray-200">
                <Pagination
                  count={3}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontFamily: "inherit",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "#dc2626",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#b91c1c",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
