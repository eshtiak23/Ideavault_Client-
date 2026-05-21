import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { user, logoutUser } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const links = (
    <>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      <NavLink className="nav-link" to="/ideas">
        Ideas
      </NavLink>

      <NavLink className="nav-link" to="/add-idea">
        Add Idea
      </NavLink>

      <NavLink className="nav-link" to="/my-ideas">
        My Ideas
      </NavLink>

      <NavLink className="nav-link" to="/my-interactions">
        My Interactions
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="container-box flex items-center justify-between py-4">
        <Link to="/" className="text-3xl font-bold">
          <span className="text-sky-500">Idea</span>
          <span className="text-purple-600">Vault</span>
        </Link>

       
        <div className="hidden lg:flex items-center gap-6">
          {links}
        </div>

        
        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} className="theme-btn">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  title={user.displayName || "Profile"}
                  className="w-11 h-11 rounded-full border-2 border-purple-400 object-cover cursor-pointer hover:scale-105 transition"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="primary-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-purple-300 text-purple-600 font-medium"
              >
                Login
              </Link>

              <Link to="/register" className="primary-btn">
                Register
              </Link>
            </>
          )}
        </div>

        

        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className="theme-btn">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user && (
            <Link to="/profile">
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-purple-400 object-cover"
              />
            </Link>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-purple-600 leading-none"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Section */}

      {open && (
        <div className="lg:hidden bg-white border-t border-purple-100 px-6 py-5">
          <div className="flex flex-col gap-4">
            {links}

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-purple-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="primary-btn text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-purple-600 font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="primary-btn text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}