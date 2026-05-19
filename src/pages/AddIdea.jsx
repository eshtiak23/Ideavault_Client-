import toast from "react-hot-toast";

export default function AddIdea() {

  const handleAddIdea = (e) => {
    e.preventDefault();

    toast.success("Idea Added Successfully");

    e.target.reset();
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

          {/* title */}
          <div>
            <label className="font-semibold text-gray-700">
              Idea Title
            </label>

            <input
              type="text"
              placeholder="Enter idea title"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* category */}
          <div>
            <label className="font-semibold text-gray-700">
              Category
            </label>

            <select
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

          {/* image */}
          <div>
            <label className="font-semibold text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* budget */}
          <div>
            <label className="font-semibold text-gray-700">
              Estimated Budget
            </label>

            <input
              type="text"
              placeholder="Example: $5000"
              className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            />
          </div>

        </div>

        {/* short description */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Short Description
          </label>

          <textarea
            rows="3"
            placeholder="Write short description"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        {/* detailed description */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Detailed Description
          </label>

          <textarea
            rows="5"
            placeholder="Write detailed description"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        {/* target audience */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Target Audience
          </label>

          <input
            type="text"
            placeholder="Students, Doctors, Farmers..."
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          />
        </div>

        {/* problem */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Problem Statement
          </label>

          <textarea
            rows="4"
            placeholder="What problem does this solve?"
            className="w-full border border-purple-200 rounded-xl px-4 py-3 mt-2 outline-none focus:border-purple-500"
            required
          ></textarea>
        </div>

        {/* solution */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Proposed Solution
          </label>

          <textarea
            rows="4"
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