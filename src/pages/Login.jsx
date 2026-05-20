import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";

export default function Login() {
  useTitle("Login");

  const { loginUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  // email login
  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await loginUser(email, password);

      toast.success("Login Successful");

      navigate("/");

    } catch (error) {

      toast.error(error.message);

    }
  };

  // google login
  const handleGoogleLogin = async () => {

    try {

      await googleLogin();

      toast.success("Google Login Successful");

      navigate("/");

    } catch (error) {

      toast.error(error.message);

    }
  };

  return (
    <div className="container-box py-16">

      <div className="max-w-md mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-600">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            required
          />

          <p className="text-sm text-purple-600">
            Forget Password?
          </p>

          <button className="primary-btn w-full">
            Login
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 border border-purple-300 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-5">

          New here?{" "}

          <Link
            to="/register"
            className="text-purple-600 font-semibold"
          >
            Create account
          </Link>

        </p>

      </div>

    </div>
  );
}