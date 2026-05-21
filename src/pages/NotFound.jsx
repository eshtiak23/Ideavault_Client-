import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { API_URL } from "../utils/api";

export default function NotFound() {
  useTitle("404");

  return (
    <div className="container-box min-h-[70vh] flex items-center justify-center py-16">
      <div className="text-center bg-white border border-purple-100 shadow-xl rounded-3xl p-10 max-w-xl">
        <h1 className="text-8xl font-bold text-purple-600">404</h1>

        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          This page is not available. Please check the URL or go back to the homepage.
        </p>

        <Link to="/">
          <button className="primary-btn mt-8">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
