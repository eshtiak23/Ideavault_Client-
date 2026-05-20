import { useContext } from "react";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import { API_URL } from "../utils/api";

export default function AddIdea() {

  useTitle("Add Idea");

  const { user } = useContext(AuthContext);

  const handleAddIdea = async (e) => {

    e.preventDefault();

    const form = e.target;

    const ideaData = {
      title: form.title.value,
      category: form.category.value,
      image: form.image.value,
      budget: form.budget.value,
      shortDescription: form.shortDescription.value,
      detailedDescription: form.detailedDescription.value,
      targetAudience: form.targetAudience.value,
      problemStatement: form.problemStatement.value,
      proposedSolution: form.proposedSolution.value,

      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
    };

    try {

      const response = await fetch(`${API_URL}/ideas`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(ideaData),
});

      const data = await response.json();

      if (data.insertedId) {

        toast.success("Idea Added Successfully");

        form.reset();

      }

    } catch (error) {

      toast.error("Failed to add idea");

    }
  };

  return (
    <div className="container-box py-16">

      <div className="text-center">
        <p className="text-pink-500 font-semibold">
          Create Startup Idea
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Add Your Innovative Idea
        </h1>

        <p className="text-gray-600 mt-4">
          Share your startup concept with the community.
        </p>
      </div>

      <form
        onSubmit={handleAddIdea}
        className="bg-white shadow-xl border border-purple-100 rounded-3xl p-8 mt-12"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold text-gray-700">
              Idea Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter idea title"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            >
              <option value="">Select Category</option>
              <option value="AI">AI</option>
              <option value="Health">Health</option>
              <option value="Tech">Tech</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Estimated Budget
            </label>

            <input
              type="text"
              name="budget"
              placeholder="Example: $5000"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            />
          </div>

        </div>

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Short Description
          </label>

          <textarea
            rows="3"
            name="shortDescription"
            placeholder="Write short description"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Detailed Description
          </label>

          <textarea
            rows="5"
            name="detailedDescription"
            placeholder="Write detailed description"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Target Audience
          </label>

          <input
            type="text"
            name="targetAudience"
            placeholder="Students, Doctors, Farmers..."
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Problem Statement
          </label>

          <textarea
            rows="4"
            name="problemStatement"
            placeholder="What problem does this solve?"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Proposed Solution
          </label>

          <textarea
            rows="4"
            name="proposedSolution"
            placeholder="How will your idea solve it?"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        <button className="primary-btn mt-8 w-full">
          Submit Idea
        </button>

      </form>

    </div>
  );
}