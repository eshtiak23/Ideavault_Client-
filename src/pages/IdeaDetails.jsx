import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function IdeaDetails() {
  const { id } = useParams();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIdea(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!idea) {
    return (
      <div className="container-box py-20 text-center">
        <h1 className="text-4xl font-bold text-red-500">Idea not found</h1>
      </div>
    );
  }

  return (
    <div className="container-box py-16">
      <div className="bg-white border border-purple-100 shadow-xl rounded-3xl overflow-hidden">
        <img
          src={idea.image}
          alt={idea.title}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">
          <p className="text-pink-500 font-semibold">{idea.category}</p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            {idea.title}
          </h1>

          <p className="text-gray-600 mt-4">{idea.shortDescription}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-sky-50 p-5 rounded-2xl">
              <h3 className="font-bold text-sky-600">Target Audience</h3>
              <p className="text-gray-700 mt-2">{idea.targetAudience}</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-2xl">
              <h3 className="font-bold text-purple-600">Estimated Budget</h3>
              <p className="text-gray-700 mt-2">
                {idea.budget || "Not mentioned"}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Detailed Description
            </h2>
            <p className="text-gray-600 mt-3">{idea.detailedDescription}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Problem Statement
            </h2>
            <p className="text-gray-600 mt-3">{idea.problemStatement}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Proposed Solution
            </h2>
            <p className="text-gray-600 mt-3">{idea.proposedSolution}</p>
          </div>

          <div className="mt-8 border-t border-purple-100 pt-6">
            <p className="text-gray-600">
              Posted by:{" "}
              <span className="font-semibold text-purple-600">
                {idea.userName || "Unknown User"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}