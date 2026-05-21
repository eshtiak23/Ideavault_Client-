import { Link } from "react-router-dom";

export default function IdeaCard({ idea }) {
  return (
    <div className="bg-white border border-purple-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
      <img
        src={idea.image}
        alt={idea.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
    
        <p className="text-sm font-semibold text-pink-500">{idea.category}</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">{idea.title}</h2>

        <p className="text-gray-600 mt-3 flex-1">{idea.shortDescription}</p>


        <Link to={`/ideas/${idea._id || idea.id}`} className="mt-6">
          <button className="primary-btn w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
}
