import IdeaCard from "../components/IdeaCard";

const ideas = [
  {
    id: 1,
    title: "AI Study Assistant",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    shortDescription: "A smart assistant that helps students learn faster.",
  },
  {
    id: 2,
    title: "Smart Blood Donor Finder",
    category: "Health",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
    shortDescription: "Connects emergency patients with nearby blood donors.",
  },
  {
    id: 3,
    title: "Local Skill Marketplace",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    shortDescription: "A platform where local experts can sell services.",
  },
];

export default function Ideas() {
  return (
    <div className="container-box py-20">
      <h1 className="text-4xl font-bold text-gray-900">All Ideas</h1>

      <p className="text-gray-600 mt-3">
        Browse startup ideas shared by creative people.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {ideas.map(idea => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}