import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container-box flex items-center justify-between py-4">
        
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          <span className="text-sky-500">Idea</span>
          <span className="text-purple-600">Vault</span>
        </Link>

        {/* links */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/ideas">
            Ideas
          </Link>

          <Link className="nav-link" to="/add-idea">
            Add Idea
          </Link>

          <Link className="nav-link" to="/my-ideas">
            My Ideas
          </Link>

          <Link className="nav-link" to="/my-interactions">
            My Interactions
          </Link>
        </div>

        {/* auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-purple-300 text-purple-600 font-medium"
          >
            Login
          </Link>

          <Link to="/register" className="primary-btn">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}