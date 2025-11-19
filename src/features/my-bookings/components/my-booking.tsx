import React, { useState } from "react";

import { Pagination } from "@mui/material";
import ProfileSidebar from "../../profile/components/profile-side-bar";
import Breadcrumbs from "../../../shared/components/breadcrumb";

// Types
interface Booking {
  id: string;
  date: string;
  time: string;
  guests: number;
  status: "Confirmed" | "Canceled";
}

export const MyBookings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data - Replace with actual API call
  const bookings: Booking[] = [
    {
      id: "11236687267",
      date: "20-07-2024",
      time: "14:00",
      guests: 20,
      status: "Confirmed",
    },
    {
      id: "11236687267",
      date: "20-07-2024",
      time: "20:00",
      guests: 10,
      status: "Canceled",
    },
    {
      id: "11236687267",
      date: "20-07-2024",
      time: "12:00",
      guests: 6,
      status: "Confirmed",
    },
    {
      id: "11236687267",
      date: "20-07-2024",
      time: "23:00",
      guests: 7,
      status: "Canceled",
    },
    {
      id: "11236687267",
      date: "20-07-2024",
      time: "16:00",
      guests: 15,
      status: "Confirmed",
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "My Profile", href: "/profile" },
    { label: "My Bookings" },
  ];

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    // TODO: Fetch bookings for the selected page
  };

  const handleViewDetails = (bookingId: string) => {
    // TODO: Navigate to booking details page or open modal
    console.log("View details for booking:", bookingId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProfileSidebar
              user={{
                name: "",
                avatar: "src/assets/images/profile/profile1.jpg",
              }}
              onSignOut={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <h1 className="text-2xl font-semibold mb-8">My bookings</h1>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Booking ID
                      </th>
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Date
                      </th>
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Time
                      </th>
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Guests
                      </th>
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Status
                      </th>
                      <th className="text-left py-4 px-2 text-sm font-medium text-gray-700">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr
                        key={`${booking.id}-${index}`}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-5 px-2 text-sm text-gray-600">
                          {booking.id}
                        </td>
                        <td className="py-5 px-2 text-sm text-gray-600">
                          {booking.date}
                        </td>
                        <td className="py-5 px-2 text-sm text-gray-600">
                          {booking.time}
                        </td>
                        <td className="py-5 px-2 text-sm text-gray-600">
                          {booking.guests}
                        </td>
                        <td className="py-5 px-2">
                          <span
                            className={`text-sm font-medium ${
                              booking.status === "Confirmed"
                                ? "text-teal-500"
                                : "text-gray-400"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-5 px-2">
                          <button
                            onClick={() => handleViewDetails(booking.id)}
                            className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
                          >
                            View details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {bookings.map((booking, index) => (
                  <div
                    key={`${booking.id}-${index}`}
                    className="border border-gray-200 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Booking ID</p>
                        <p className="text-sm font-medium text-gray-900">
                          {booking.id}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          booking.status === "Confirmed"
                            ? "text-teal-500"
                            : "text-gray-400"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Date</p>
                        <p className="text-sm text-gray-900">{booking.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Time</p>
                        <p className="text-sm text-gray-900">{booking.time}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Guests</p>
                        <p className="text-sm text-gray-900">
                          {booking.guests}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleViewDetails(booking.id)}
                      className="w-full text-center text-sm text-red-500 hover:text-red-600 font-medium py-2 transition-colors"
                    >
                      View details
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <Pagination
                  count={3}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontFamily: "inherit",
                      "&.Mui-selected": {
                        backgroundColor: "#ef4444",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#dc2626",
                        },
                      },
                      "&:hover": {
                        backgroundColor: "#fee2e2",
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
export default MyBookings;
