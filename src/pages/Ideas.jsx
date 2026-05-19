import { useState } from "react";
import IdeaCard from "../components/IdeaCard";

const allIdeas = [
  {
    id: 1,
    title: "AI Study Assistant",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    shortDescription: "Helps students learn faster with AI support.",
  },
  {
    id: 2,
    title: "Smart Blood Donor Finder",
    category: "Health",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
    shortDescription: "Finds nearby blood donors during emergencies.",
  },
  {
    id: 3,
    title: "Local Skill Marketplace",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    shortDescription: "Connects local skilled people with clients.",
  },
  {
    id: 4,
    title: "Green Farming AI",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    shortDescription: "Supports farmers with crop monitoring ideas.",
  },
  {
    id: 5,
    title: "Online Doctor Platform",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    shortDescription: "Makes online doctor consultation easier.",
  },
  {
    id: 6,
    title: "Digital Classroom Hub",
    category: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    shortDescription: "Helps teachers and students share resources.",
  },
];

export default function Ideas() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredIdeas = allIdeas.filter((idea) => {
    const titleMatched = idea.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const categoryMatched = selectedCategory
      ? idea.category === selectedCategory
      : true;

    return titleMatched && categoryMatched;
  });

  return (
    <div className="container-box py-16">
      <div className="text-center">
        <p className="text-pink-500 font-semibold">Explore Ideas</p>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Discover Startup Ideas
        </h1>

        <p className="text-gray-600 mt-4">
          Search and filter startup ideas easily.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <input
          type="text"
          placeholder="Search by idea title..."
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
          <option value="Agriculture">Agriculture</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}

        {filteredIdeas.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No ideas found.
          </p>
        )}
      </div>
    </div>
  );
}