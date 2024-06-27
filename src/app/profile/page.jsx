"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateUser } from "@/store/slices/authSlice"; // Assuming this action is defined

export default function Profile() {
  // const user = useSelector((state) => state.auth.user);
  const user = true;
  const dispatch = useDispatch();

  // State to manage form Input
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    // Add more fields as needed
  });

  // Handle form Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch update user action
    // dispatch(updateUser(formData));
    setEditMode(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">User Profile</h2>
      {user ? (
        <div className="max-w-full mx-auto bg-rose-50 rounded-lg overflow-hidden">
          <div className="p-6">
            {!editMode ? (
              <>
                <h3 className="text-xl font-semibold mb-2">
                  {user.name || "Nadim Chowdhury"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {user.email || "nadim-chowdhury@outlook.com"}
                </p>
                {/* Add more profile information here if needed */}
                <div className="flex justify-end">
                  <Button
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mr-2"
                    onClick={() => setEditMode(true)}
                  >
                    Edit Profile
                  </Button>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  />
                </div>
                {/* Add more fields as needed */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 mr-2"
                  >
                    Save
                  </Button>
                  <Button
                    type="Button"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">User not logged in.</p>
      )}
    </div>
  );
}
