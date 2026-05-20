import { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";

export default function Profile() {
  useTitle("Profile");

  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateUserProfile(name, photo);

      toast.success("Profile updated successfully");

      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-box py-16">
      <div className="max-w-xl mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl p-8">
        <div className="text-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="user"
            className="w-28 h-28 rounded-full mx-auto border-4 border-purple-400 object-cover"
          />

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            Profile Management
          </h1>

          <p className="text-gray-600 mt-2">
            Update your name and profile photo.
          </p>
        </div>

        <form onSubmit={handleUpdateProfile} className="mt-8 space-y-5">
          <div>
            <label className="font-semibold text-gray-700">Full Name</label>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Photo URL</label>

            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL}
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email</label>

            <input
              type="email"
              value={user?.email}
              disabled
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 bg-gray-100 text-gray-500"
            />
          </div>

          <button className="primary-btn w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}