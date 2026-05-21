import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import Spinner from "../components/Spinner";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import { API_URL } from "../utils/api";

export default function MyIdeas() {
  const { user } = useContext(AuthContext);

  useTitle("My Ideas");

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`${API_URL}/my-ideas?email=${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => {
        setIdeas(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        toast.error("Could not load your ideas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

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
      if (!result.isConfirmed) return;

      fetch(`${API_URL}/ideas/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Idea deleted successfully");
            setIdeas((currentIdeas) =>
              currentIdeas.filter((idea) => idea._id !== id)
            );
          }
        })
        .catch(() => {
          toast.error("Could not delete the idea");
        });
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
          Ideas You Shared with the Community.
        </h1>

        <p className="text-purple-700 mt-4">
          You can edit or delete your startup ideas.
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

              <p className="text-gray-600 mt-3">{idea.shortDescription}</p>

              <div className="flex gap-3 mt-6">
                <Link to={`/edit-idea/${idea._id}`} className="flex-1">
                  <button className="primary-btn w-full">Edit</button>
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
            You haven'tt added any idea yet.
          </p>
        )}
      </div>
    </div>
  );
}
