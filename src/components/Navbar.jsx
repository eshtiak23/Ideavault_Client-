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
      setOpen(false);
      toast.success("Logged out");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-purple-700 dark:text-purple-300"
        : "text-gray-700 hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-300"
    }`;

  const links = (
    <>
      <NavLink onClick={() => setOpen(false)} className={navLinkClass} to="/">
        Home
      </NavLink>

      <NavLink onClick={() => setOpen(false)} className={navLinkClass} to="/ideas">
        Ideas
      </NavLink>

      {user && (
        <>
          <NavLink onClick={() => setOpen(false)} className={navLinkClass} to="/add-idea">
            Add Idea
          </NavLink>

          <NavLink onClick={() => setOpen(false)} className={navLinkClass} to="/my-ideas">
            My Ideas
          </NavLink>

          <NavLink onClick={() => setOpen(false)} className={navLinkClass} to="/my-interactions">
            My Interactions
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-box flex items-center justify-between py-4">
        <Link to="/" className="text-3xl font-bold">
          <span className="text-sky-500">Idea</span>
          <span className="text-purple-600 dark:text-purple-400">Vault</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">{links}</div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-200 bg-white text-base shadow-sm transition hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="user"
                  title={user.displayName || "Profile"}
                  className="h-10 w-10 rounded-full border-2 border-purple-400 object-cover transition hover:scale-105"
                />
              </Link>

              <button onClick={handleLogout} className="primary-btn">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg border border-purple-300 px-5 py-2 font-medium text-purple-600 transition hover:bg-purple-50 dark:border-slate-700 dark:text-purple-300 dark:hover:bg-slate-800"
              >
                Login
              </Link>

              <Link to="/register" className="primary-btn">
                Register
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-200 bg-white text-base shadow-sm transition hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user && (
            <Link to="/profile">
              <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="user"
                className="h-9 w-9 rounded-full border-2 border-purple-400 object-cover"
              />
            </Link>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-2xl text-purple-600 transition hover:bg-purple-100 dark:text-purple-400 dark:hover:bg-slate-800"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-purple-100 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-4">
            {links}

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="font-medium text-purple-600 dark:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                <button onClick={handleLogout} className="primary-btn text-center">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium text-purple-600 dark:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="primary-btn text-center"
                  onClick={() => setOpen(false)}
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