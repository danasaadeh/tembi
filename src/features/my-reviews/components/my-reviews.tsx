import React, { useState } from "react";

import { Rating, Pagination } from "@mui/material";
import Breadcrumbs from "../../../shared/components/breadcrumb";
import ProfileSidebar from "../../profile/components/profile-side-bar";

interface Review {
  id: string;
  productImage: string;
  rating: number;
  date: string;
  comment: string;
}

export const MyReviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data - replace with actual API call
  const reviews: Review[] = [
    {
      id: "1",
      productImage: "src/assets/images/reviews/parmezan.jpg",
      rating: 4,
      date: "20-08-2024",
      comment:
        "A delicious and beautifully presented dish that just needs a little salt to be perfect.",
    },
    {
      id: "2",
      productImage: "src/assets/images/reviews/spagetti.jpg",
      rating: 3,
      date: "30-08-2024",
      comment:
        "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
    },
    {
      id: "3",
      productImage: "src/assets/images/reviews/cesar-salad.jpg",
      rating: 1,
      date: "28-08-2024",
      comment:
        "The taste is bad and the vegetables are not fresh, I don't want to eat this dish again.",
    },
  ];

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    // TODO: Fetch reviews for the selected page
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "My Profile", path: "/profile" },
    { label: "My Order", path: "/my-order" },
  ];
  const user = {
    name: "Ahmad AL-Ahmad",
    avatar: "src/assets/images/profile/profile1.jpg",
  };

  const handleSignOut = () => {
    // TODO: Implement sign out logic with Zustand
    console.log("Sign out clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProfileSidebar user={user} onSignOut={handleSignOut} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-8">My Reviews</h1>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-100 last:border-b-0"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={review.productImage || "/placeholder.svg"}
                        alt="Product"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                      />
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <Rating
                          value={review.rating}
                          readOnly
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#f59e0b",
                            },
                            "& .MuiRating-iconEmpty": {
                              color: "#d1d5db",
                            },
                          }}
                        />
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
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
                      color: "#6b7280",
                      "&.Mui-selected": {
                        backgroundColor: "#ef4444",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#dc2626",
                        },
                      },
                      "&:hover": {
                        backgroundColor: "#f3f4f6",
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
