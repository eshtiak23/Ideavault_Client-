const categories = ["Tech", "AI", "Health", "Education", "Business", "Agriculture"];

export default function CategoriesPreview() {
  return (
    <section className="bg-gradient-to-r from-sky-50 via-purple-50 to-pink-50 py-20">
      <div className="container-box">
        <div className="text-center">
          <p className="text-pink-500 font-semibold">Idea Categories</p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Explore Ideas By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
          {categories.map(category => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 text-center font-bold text-purple-600 hover:-translate-y-1 transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}