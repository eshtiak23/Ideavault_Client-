import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Spinner from "../components/Spinner";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";
export default function IdeaDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [idea, setIdea] = useState(null);
  useTitle(idea?.title || "Idea Details");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadComments = () => {
    fetch(`${API_URL}/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIdea(data);
        setLoading(false);
      });

    loadComments();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const commentText = form.comment.value;

    const newComment = {
      ideaId: id,
      commentText: commentText,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
    };

    const response = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    const data = await response.json();

    if (data.insertedId) {
      toast.success("Comment added successfully");
      form.reset();
      loadComments();
    }
  };

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
            <h2 className="text-2xl font-bold">Detailed Description</h2>
            <p className="text-gray-600 mt-3">{idea.detailedDescription}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Problem Statement</h2>
            <p className="text-gray-600 mt-3">{idea.problemStatement}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Proposed Solution</h2>
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

      <div className="bg-white border border-purple-100 shadow-xl rounded-3xl p-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Comments
        </h2>

        <form onSubmit={handleAddComment} className="mt-6">
          <textarea
            name="comment"
            rows="4"
            placeholder="Write your comment..."
            className="w-full border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            required
          ></textarea>

          <button className="primary-btn mt-4">
            Add Comment
          </button>
        </form>

        <div className="mt-8 space-y-5">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="border border-purple-100 rounded-2xl p-5 bg-purple-50"
            >
              <div className="flex items-center gap-3">
                <img
                  src={comment.userPhoto || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                  alt="user"
                  className="w-11 h-11 rounded-full"
                />

                <div>
                  <h3 className="font-bold text-gray-900">
                    {comment.userName || "Unknown User"}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                {comment.commentText}
              </p>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-gray-500">
              No comments yet. Be the first to comment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}