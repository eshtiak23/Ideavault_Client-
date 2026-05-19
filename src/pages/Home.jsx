import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhyIdeaVault from "../components/WhyIdeaVault";
import CategoriesPreview from "../components/CategoriesPreview";
import IdeaCard from "../components/IdeaCard";

const slides = [
  {
    id: 1,
    title: "Share Your Startup Idea",
    text: "Turn your creative thoughts into visible startup concepts and get feedback from others.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  },
  {
    id: 2,
    title: "Explore Innovative Concepts",
    text: "Discover fresh ideas from students, creators, developers, and future entrepreneurs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    id: 3,
    title: "Validate Ideas With Community",
    text: "Improve your idea through comments, discussions, and useful suggestions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const trendingIdeas = [
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
  {
    id: 4,
    title: "Green Farming AI",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    shortDescription: "AI-powered crop monitoring and farming assistance.",
  },
  {
    id: 5,
    title: "Remote Team Hub",
    category: "Business",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    shortDescription: "Manage remote teams with productivity analytics.",
  },
  {
    id: 6,
    title: "Online Doctor Platform",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    shortDescription: "Book online consultations with verified doctors.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <div>
      {/* banner */}
      <section className="bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 py-16 md:py-24">
        <div className="container-box grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-pink-500 font-semibold mb-3">
              Startup Idea Sharing Platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              {currentSlide.title}
            </h1>

            <p className="text-gray-600 text-lg mt-5">
              {currentSlide.text}
            </p>

            <Link to="/ideas">
              <button className="primary-btn mt-8">
                Explore Ideas
              </button>
            </Link>

            {/* dots */}
            <div className="flex gap-3 mt-8">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className={`w-10 h-3 rounded-full transition ${
                    activeSlide === index
                      ? "bg-purple-600"
                      : "bg-white border border-purple-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-xl border border-purple-100">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* trending ideas */}
      <section className="container-box py-20">
        <div className="text-center">
          <p className="text-pink-500 font-semibold">
            Trending Startup Ideas
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Popular Ideas From Creative Minds
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover innovative startup concepts shared by our growing community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {trendingIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </section>

       <WhyIdeaVault />
      <CategoriesPreview />


    </div>
  );
}