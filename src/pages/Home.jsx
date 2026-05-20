import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import IdeaCard from "../components/IdeaCard";
import Spinner from "../components/Spinner";
import WhyIdeaVault from "../components/WhyIdeaVault";
import CategoriesPreview from "../components/CategoriesPreview";

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

export default function Home() {
  useTitle("Home");

  const [activeSlide, setActiveSlide] = useState(0);

  const [trendingIdeas, setTrendingIdeas] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

   fetch(`${import.meta.env.VITE_API_URL}/trending-ideas`)

      .then((res) => res.json())
      .then((data) => {

        setTrendingIdeas(data);

        setLoading(false);

      });

  }, []);

  const currentSlide = slides[activeSlide];

  if (loading) {
    return <Spinner />;
  }

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

            <div className="flex gap-3 mt-8">

              {
                slides.map((slide, index) => (

                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`w-10 h-3 rounded-full transition ${
                      activeSlide === index
                        ? "bg-purple-600"
                        : "bg-white border border-purple-300"
                    }`}
                  ></button>

                ))
              }

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

          {
            trendingIdeas.map((idea) => (
              <IdeaCard
                key={idea._id}
                idea={idea}
              />
            ))
          }

        </div>

      </section>

      <WhyIdeaVault />

      <CategoriesPreview />

    </div>
  );
}