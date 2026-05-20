
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";
import useTitle from "../hooks/useTitle";

export default function MyIdeas() {
  const { user } = useContext(AuthContext);
  useTitle("My Ideas");

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const loadMyIdeas = () => {
    fetch(`${import.meta.env.VITE_API_URL}/my-ideas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIdeas(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMyIdeas();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This idea will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9333ea",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/ideas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Idea deleted successfully");

              const remainingIdeas = ideas.filter((idea) => idea._id !== id);
              setIdeas(remainingIdeas);
            }
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedIdea = {
      title: form.title.value,
      category: form.category.value,
      image: form.image.value,
      budget: form.budget.value,
      shortDescription: form.shortDescription.value,
      detailedDescription: form.detailedDescription.value,
      targetAudience: form.targetAudience.value,
      problemStatement: form.problemStatement.value,
      proposedSolution: form.proposedSolution.value,
    };

    fetch(`${import.meta.env.VITE_API_URL}/ideas/${selectedIdea._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedIdea),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Idea updated successfully");
          setSelectedIdea(null);
          loadMyIdeas();
        }
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-box py-16">
      <div className="text-center">
        <p className="text-pink-500 font-semibold">My Ideas</p>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Ideas You Shared
        </h1>

        <p className="text-gray-600 mt-4">
          Update or delete your startup ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="bg-white border border-purple-100 rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <p className="text-sm text-pink-500 font-semibold">
                {idea.category}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                {idea.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {idea.shortDescription}
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setSelectedIdea(idea)}
                  className="primary-btn flex-1"
                >
                  Update
                </button>

                 <Link to={`/edit-idea/${idea._id}`}>
    <button className="primary-btn">
      Edit
    </button>
  </Link>

                <button
                  onClick={() => handleDelete(idea._id)}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold flex-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {ideas.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            You have not added any idea yet.
          </p>
        )}
      </div>

      {selectedIdea && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold text-purple-600">
              Update Idea
            </h2>

            <form onSubmit={handleUpdate} className="mt-6 space-y-5">
              <input
                type="text"
                name="title"
                defaultValue={selectedIdea.title}
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              />

              <select
                name="category"
                defaultValue={selectedIdea.category}
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              >
                <option value="AI">AI</option>
                <option value="Health">Health</option>
                <option value="Tech">Tech</option>
                <option value="Education">Education</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Business">Business</option>
              </select>

              <input
                type="text"
                name="image"
                defaultValue={selectedIdea.image}
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              />

              <input
                type="text"
                name="budget"
                defaultValue={selectedIdea.budget}
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
              />

              <textarea
                name="shortDescription"
                defaultValue={selectedIdea.shortDescription}
                rows="3"
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              ></textarea>

              <textarea
                name="detailedDescription"
                defaultValue={selectedIdea.detailedDescription}
                rows="4"
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              ></textarea>

              <input
                type="text"
                name="targetAudience"
                defaultValue={selectedIdea.targetAudience}
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              />

              <textarea
                name="problemStatement"
                defaultValue={selectedIdea.problemStatement}
                rows="3"
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              ></textarea>

              <textarea
                name="proposedSolution"
                defaultValue={selectedIdea.proposedSolution}
                rows="3"
                className="w-full border border-purple-200 rounded-xl px-4 py-3"
                required
              ></textarea>

              <div className="flex gap-4">
                <button className="primary-btn flex-1">
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedIdea(null)}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-xl font-semibold flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}