import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import useTitle from "../hooks/useTitle";

export default function EditIdea() {

  useTitle("Edit Idea");

  const { id } = useParams();

  const navigate = useNavigate();

  const [idea, setIdea] = useState({});

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => setIdea(data));

  }, [id]);

  const handleUpdateIdea = async (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedIdea = {

      title: form.title.value,
      category: form.category.value,
      image: form.image.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,

    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/ideas/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedIdea),
      }
    );

    const data = await response.json();

    if (data.modifiedCount > 0) {

      toast.success("Idea Updated Successfully");

      navigate("/my-ideas");

    }

  };

  return (
    <div className="container-box py-16">

      <div className="max-w-3xl mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-600">
          Edit Idea
        </h1>

        <form
          onSubmit={handleUpdateIdea}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            name="title"
            defaultValue={idea.title}
            placeholder="Idea title"
            className="w-full border border-purple-200 rounded-xl px-4 py-3"
            required
          />

          <input
            type="text"
            name="category"
            defaultValue={idea.category}
            placeholder="Category"
            className="w-full border border-purple-200 rounded-xl px-4 py-3"
            required
          />

          <input
            type="text"
            name="image"
            defaultValue={idea.image}
            placeholder="Image URL"
            className="w-full border border-purple-200 rounded-xl px-4 py-3"
            required
          />

          <textarea
            name="shortDescription"
            defaultValue={idea.shortDescription}
            placeholder="Short description"
            rows="3"
            className="w-full border border-purple-200 rounded-xl px-4 py-3"
            required
          ></textarea>

          <textarea
            name="description"
            defaultValue={idea.description}
            placeholder="Full description"
            rows="6"
            className="w-full border border-purple-200 rounded-xl px-4 py-3"
            required
          ></textarea>

          <button className="primary-btn w-full">
            Update Idea
          </button>

        </form>

      </div>

    </div>
  );
}