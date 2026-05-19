import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../provider/AuthProvider";

export default function Register() {

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!hasUppercase) {
      toast.error("Password must include uppercase letter");
      return;
    }

    if (!hasLowercase) {
      toast.error("Password must include lowercase letter");
      return;
    }

    try {

      // create firebase user
      await createUser(email, password);

      // update user profile
      await updateUserProfile(name, photo);

      toast.success("Registration Successful");

      form.reset();

    } catch (error) {

      toast.error(error.message);

    }
  };

  return (
    <div className="container-box py-16">

      <div className="max-w-md mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-600">
          Register
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Create your IdeaVault account
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          {/* name */}
          <div>
            <label className="font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* email */}
          <div>
            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* photo */}
          <div>
            <label className="font-semibold text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* password */}
          <div>
            <label className="font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <button className="primary-btn w-full">
            Register
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-600 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}