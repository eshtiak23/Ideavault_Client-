import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "X",
    url: "https://x.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-sky-100 via-pink-100 to-purple-100 border-t border-purple-100">
      <div className="container-box py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* brand */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-sky-500">Idea</span>
              <span className="text-purple-600">Vault</span>
            </h2>

            <p className="text-gray-600 leading-7">
              A startup idea sharing platform where creative people can publish
              ideas, collect feedback, and improve concepts through community
              discussion.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* platform links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-700">
              Platform
            </h3>

            <div className="flex flex-col gap-3">
              <Link className="text-gray-600 hover:text-purple-600" to="/">
                Home
              </Link>

              <Link className="text-gray-600 hover:text-purple-600" to="/ideas">
                Explore Ideas
              </Link>

              <Link className="text-gray-600 hover:text-purple-600" to="/add-idea">
                Add Idea
              </Link>

              <Link className="text-gray-600 hover:text-purple-600" to="/my-ideas">
                My Ideas
              </Link>
            </div>
          </div>

          {/* categories */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-700">
              Categories
            </h3>

            <div className="flex flex-col gap-3">
              <p className="text-gray-600">AI Ideas</p>
              <p className="text-gray-600">Health Startups</p>
              <p className="text-gray-600">Education Platforms</p>
              <p className="text-gray-600">Tech Solutions</p>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-700">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>
                Email:{" "}
                <span className="font-semibold text-gray-700">
                  ashtagil@gmail.com
                </span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-semibold text-gray-700">
                  +88024545554
                </span>
              </p>

              <p>
                Location:{" "}
                <span className="font-semibold text-gray-700">
                  Bangladesh
                </span>
              </p>
            </div>

            <div className="mt-6 bg-white/70 rounded-2xl p-4 border border-purple-100">
              <p className="text-sm text-gray-600">
                Have a startup idea? Share it and collect real feedback from
                the community.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
          <p>© 2026 IdeaVault. All rights reserved.</p>

          <div className="flex gap-5 text-sm">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Community Rules</p>
          </div>
        </div>
      </div>
    </footer>
  );
}