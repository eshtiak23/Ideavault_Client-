import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import Spinner from "../components/Spinner";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";

export default function MyInteractions() {
  const { user } = useContext(AuthContext);
  useTitle("My Interactions");

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState(null);

  const loadComments = () => {
    fetch(`http://localhost:5000/my-interactions?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadComments();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This comment will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9333ea",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/comments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Comment deleted successfully");

              const remainingComments = comments.filter(
                (comment) => comment._id !== id
              );

              setComments(remainingComments);
            }
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedComment = {
      commentText: form.commentText.value,
    };

    fetch(`http://localhost:5000/comments/${selectedComment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Comment updated successfully");
          setSelectedComment(null);
          loadComments();
        }
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-box py-16">
      <div className="text-center">
        <p className="text-pink-500 font-semibold">My Interactions</p>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Comments You Added
        </h1>

        <p className="text-gray-600 mt-4">
          View, edit, and delete your comments.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={comment.userPhoto || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                alt="user"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-bold text-gray-900">
                  {comment.userName || "Unknown User"}
                </h3>

                <p className="text-sm text-gray-500">
                  Created: {new Date(comment.createdAt).toLocaleString()}
                </p>

                {comment.updatedAt && (
                  <p className="text-sm text-purple-500">
                    Updated: {new Date(comment.updatedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <p className="text-gray-700 mt-5">
              {comment.commentText}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setSelectedComment(comment)}
                className="primary-btn"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(comment._id)}
                className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-center text-gray-500">
            No interactions found.
          </p>
        )}
      </div>

      {selectedComment && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 max-w-xl w-full">
            <h2 className="text-3xl font-bold text-purple-600">
              Edit Comment
            </h2>

            <form onSubmit={handleUpdate} className="mt-6">
              <textarea
                name="commentText"
                rows="5"
                defaultValue={selectedComment.commentText}
                className="w-full border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                required
              ></textarea>

              <div className="flex gap-4 mt-5">
                <button className="primary-btn flex-1">
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedComment(null)}
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