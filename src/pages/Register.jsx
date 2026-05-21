import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  useTitle("Register");

  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include an uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must include a lowercase letter");
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);

      toast.success("Account created successfully");

      form.reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="container-box py-16">
      <div className="max-w-md mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600">
          Register
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Create your account
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="font-semibold text-blue-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-blue-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-blue-700">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-blue-700">Password</label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="w-full border border-purple-200 rounded-xl px-4 py-3 pr-20 outline-none focus:border-purple-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-purple-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="primary-btn w-full">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}