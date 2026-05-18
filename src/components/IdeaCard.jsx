import { Link } from "react-router-dom";

export default function IdeaCard({ idea }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-purple-100 overflow-hidden hover:shadow-xl transition">
      <img
        src={idea.image}
        alt={idea.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-pink-500 font-semibold">
          {idea.category}
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-2">
          {idea.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {idea.shortDescription}
        </p>

        <Link to={`/ideas/${idea.id}`}>
          <button className="primary-btn mt-5 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}