import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  },
  {
    name: "Twitter",
    url: "https://x.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
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
    <footer className="mt-20 border-t border-purple-200 bg-gradient-to-r from-sky-100 via-pink-100 to-purple-100 dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      <div className="container-box py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-sky-500">Idea</span>
              <span className="text-purple-600 dark:text-purple-400">
                Vault
              </span>
            </h2>

            <p className="leading-7 text-gray-600 dark:text-slate-300">
              A platform where creative people can publish ideas, collect
              feedback, and improve concepts through community discussion.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 dark:border dark:border-slate-700"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-purple-700 dark:text-purple-400">
              Platform
            </h3>

            <div className="flex flex-col gap-3">
              <Link className="text-gray-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" to="/">
                Home
              </Link>

              <Link className="text-gray-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" to="/ideas">
                Explore Ideas
              </Link>

              <Link className="text-gray-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" to="/add-idea">
                Add Idea
              </Link>

              <Link className="text-gray-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400" to="/my-ideas">
                My Ideas
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-purple-700 dark:text-purple-400">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600 dark:text-slate-300">
              <p>
                Email:{" "}
                <span className="font-semibold text-gray-700 dark:text-slate-100">
                  asharidea2@gmail.com
                </span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-semibold text-gray-700 dark:text-slate-100">
                  +8801989984032
                </span>
              </p>

              <p>
                Location:{" "}
                <span className="font-semibold text-gray-700 dark:text-slate-100">
                  Rajshahi, Bangladesh
                </span>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-purple-100 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-800/80">
              <p className="text-sm text-gray-600 dark:text-slate-300">
                Have a startup idea? Share it and collect real feedback from the
                community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-purple-200 pt-6 text-gray-600 dark:border-slate-700 dark:text-slate-300 md:flex-row">
          <p>© 2026 IdeaVault. All rights reserved.</p>

          <div className="flex gap-5 text-sm">
            <p>Built for learning purpose</p>
            <p>Be Creative</p>
            <p>Share Ideas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}