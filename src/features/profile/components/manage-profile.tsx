import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Breadcrumbs from "../../../shared/components/breadcrumb";
import ProfileSidebar from "./profile-side-bar";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
}

const ManageProfile: React.FC = () => {
  // Mock user data - replace with actual data from your state management
  const [user] = useState({
    name: "Ahmad AL-Ahmad",
    avatar: "src/assets/images/profile/profile1.jpg",
  });

  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "Ahmad",
    lastName: "AL-Ahmad",
    username: "@ahmad",
    phone: "+44 254 236 5891",
    email: "ahmad@gmail.com",
  });

  const [avatarPreview, setAvatarPreview] = useState(user.avatar);

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // TODO: Implement save logic with your API
    console.log("Saving profile changes:", formData);
    // Example: Use axios with react-query mutation here
  };

  const handleSignOut = () => {
    // TODO: Implement sign out logic
    console.log("Signing out...");
  };

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "My Profile", to: "/profile" },
    { label: "Manage Profile" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Sidebar - Hidden on mobile, visible on lg screens */}
          <div className="hidden lg:block lg:col-span-3">
            <ProfileSidebar user={user} onSignOut={handleSignOut} />
          </div>

          {/* Mobile User Card */}
          <div className="lg:hidden bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{user.name}</h3>
              <button
                onClick={handleSignOut}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Manage Profile
              </h1>

              {/* Avatar Upload Section */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={avatarPreview || "/placeholder.svg"}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 bg-red-600 hover:bg-red-700 text-white rounded-full p-1.5 cursor-pointer transition-colors"
                  >
                    <CameraAltOutlinedIcon className="!w-4 !h-4" />
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <label
                    htmlFor="avatar-upload"
                    className="text-sm text-red-600 hover:text-red-700 cursor-pointer font-medium"
                  >
                    Change image
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <form className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First name
                    </label>
                    <TextField
                      fullWidth
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e5e7eb",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d1d5db",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ef4444",
                          },
                        },
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last name
                    </label>
                    <TextField
                      fullWidth
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e5e7eb",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d1d5db",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ef4444",
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Username & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <TextField
                      fullWidth
                      value={formData.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e5e7eb",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d1d5db",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ef4444",
                          },
                        },
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <TextField
                      fullWidth
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e5e7eb",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d1d5db",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ef4444",
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <TextField
                      fullWidth
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e5e7eb",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d1d5db",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ef4444",
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-6">
                  <Button
                    variant="contained"
                    onClick={handleSaveChanges}
                    sx={{
                      backgroundColor: "#ef4444",
                      "&:hover": {
                        backgroundColor: "#dc2626",
                      },
                      textTransform: "none",
                      paddingX: 4,
                      paddingY: 1.5,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      borderRadius: "0.5rem",
                    }}
                  >
                    Save Change
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
