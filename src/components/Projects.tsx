import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js. Features include real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Product Recommendation System",
    description:
      "Developed a dynamic web-based recommendation system that suggests electronic devices based on user preferences and specifications. Utilized a combination of machine learning algorithms and user-input filters to provide personalized product recommendations.",
    image: "prd.jpg",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "YouTube Comment Analyzer",
    description:
      "A web application that utilizes the YouTube Data API to fetch and analyze comments from YouTube videos, employing sentiment analysis to categorize feedback and visualize the results on a dynamic webpage.",
    image: "/ytb2.png",
    github: "https://github.com/hr-k001/YouTube_comment_analyzer",
    live: "https://example.com",
    tags: ["HTML", "CSS", "Python", "Flask", "MongoDB"],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + projects.length) % projects.length
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="floating-section"
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-100">
            Projects
          </h2>

          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium bg-gray-700/50 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-6">
                    <a
                      href={projects[currentIndex].github}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={projects[currentIndex].live}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              onClick={() => paginate(1)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
