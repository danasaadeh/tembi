import React from "react";
import { Link, useLocation } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface ProfileSidebarProps {
  user: {
    name: string;
    avatar: string;
  };
  onSignOut: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ user, onSignOut }) => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Manage Profile",
      icon: PersonOutlineIcon,
      path: "/profile/manage",
    },
    {
      label: "My Order",
      icon: ReceiptLongOutlinedIcon,
      path: "/profile/orders",
    },
    {
      label: "My bookings",
      icon: BookmarkBorderOutlinedIcon,
      path: "/profile/bookings",
    },
    {
      label: "My Reviews",
      icon: StarBorderOutlinedIcon,
      path: "/profile/reviews",
    },
  ];

  return (
    <aside className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-4">
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <img
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-base font-semibold text-gray-900">{user.name}</h3>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="!w-5 !h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Button */}
      <button
        onClick={onSignOut}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Sign Out
      </button>
    </aside>
  );
};

export default ProfileSidebar;
