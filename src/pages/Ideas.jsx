import { useEffect, useState } from "react";
import IdeaCard from "../components/IdeaCard";
import Spinner from "../components/Spinner";
import { API_URL } from "../utils/api";

export default function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/ideas`)
      .then((res) => {
  if (!res.ok) throw new Error("Failed to load ideas data");
  return res.json();
})
      .then((data) => {
        setIdeas(data);
        setLoading(false);
      });
  }, []);

  const filteredIdeas = ideas.filter((idea) => {
    const titleMatched = idea.title
      ?.toLowerCase()
      .includes(searchText.toLowerCase());

    const categoryMatched = selectedCategory
      ? idea.category === selectedCategory
      : true;

    return titleMatched && categoryMatched;
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-box py-16">
      <div className="text-center">
        <p className="text-pink-500 font-semibold">Explore Ideas</p>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Explore Creative Startup Ideas
        </h1>

        <p className="text-gray-600 mt-4">
          Search and filter startup ideas from the database.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mt-9">
        <input
          type="text"
          placeholder="Search by idea title or description..."
          className="border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="border border-purple-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="AI">AI</option>
          <option value="Health">Health</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredIdeas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}

        {filteredIdeas.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No ideas found.
          </p>
        )}
      </div>
    </div>
  );
}
