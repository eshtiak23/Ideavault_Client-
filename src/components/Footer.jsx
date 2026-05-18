import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-100 via-pink-100 to-purple-100 mt-20">
      <div className="container-box py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-sky-500">Idea</span>
              <span className="text-purple-600">Vault</span>
            </h2>

            <p className="text-gray-600">
              Share startup ideas, discover innovation, and connect with creative minds.
            </p>
          </div>

          {/* links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link className="text-gray-600 hover:text-purple-600" to="/">
                Home
              </Link>

              <Link className="text-gray-600 hover:text-purple-600" to="/ideas">
                Ideas
              </Link>

              <Link
                className="text-gray-600 hover:text-purple-600"
                to="/add-idea"
              >
                Add Idea
              </Link>
            </div>
          </div>

          {/* Contact Section */}

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">
              Contact
            </h3>

            <p className="text-gray-600">Email: ashtagil@gmail.com</p>
            <p className="text-gray-600 mt-2">Phone: +88024545554</p>

            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
              >
                F
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
              >
                I
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-10 pt-5 text-center text-gray-600">
          © 2026 IdeaVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}