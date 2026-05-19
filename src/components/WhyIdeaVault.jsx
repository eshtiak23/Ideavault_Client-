export default function WhyIdeaVault() {
  return (
    <section className="container-box py-20">
      <div className="text-center">
        <p className="text-pink-500 font-semibold">Why IdeaVault?</p>

        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          Build Better Ideas With Community Feedback
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-7 rounded-2xl bg-sky-50 border border-sky-100">
          <h3 className="text-2xl font-bold text-sky-600">Share</h3>
          <p className="text-gray-600 mt-3">
            Publish your startup idea with problem, solution, audience, and budget.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-purple-50 border border-purple-100">
          <h3 className="text-2xl font-bold text-purple-600">Validate</h3>
          <p className="text-gray-600 mt-3">
            Get useful comments from users and understand if your idea has value.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-pink-50 border border-pink-100">
          <h3 className="text-2xl font-bold text-pink-600">Improve</h3>
          <p className="text-gray-600 mt-3">
            Refine your concept before turning it into a real-world project.
          </p>
        </div>
      </div>
    </section>
  );
}