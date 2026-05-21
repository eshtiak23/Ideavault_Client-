import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";

export default function Profile() {
  useTitle("Profile");

  const { user, updateUserProfile } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    try {
      setLoading(true);

      await updateUserProfile(name, photo);

      toast.success("Profile updated");

      window.location.reload();
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-box py-16">
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8">
        <div className="text-center">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt="User"
            className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-purple-300"
          />

          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            My Profile
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your account information
          </p>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo URL
            </label>

            <input
              type="url"
              name="photo"
              defaultValue={user?.photoURL || ""}
              placeholder="Enter photo URL"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={user?.email || "No email found"}
              disabled
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-medium transition-all ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}