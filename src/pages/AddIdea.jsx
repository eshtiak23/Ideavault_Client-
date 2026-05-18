export default function AddIdea() {
  return (
    <div className="container-box py-20">
      <h1 className="text-5xl font-bold text-purple-600">
        Add New Idea
      </h1>

      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="ideaTitle" className="block text-gray-700 font-medium">
            Idea Title
          </label>
          <input
            type="text"
            id="ideaTitle"
            className="form-input mt-1 block w-full"
            placeholder="Enter your idea title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ideaDescription" className="block text-gray-700 font-medium">
            Idea Description
          </label>
          <textarea
            id="ideaDescription"
            className="form-textarea mt-1 block w-full"
            placeholder="Describe your idea in detail"
            rows={4}
          />
        </div>

        <button type="submit" className="primary-btn">
          Submit Idea
        </button>
      </form>
    </div>
  );
}