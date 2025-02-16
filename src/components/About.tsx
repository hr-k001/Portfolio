import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileDown } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
            About Me
          </h2>
          <div className="glass-card rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-300 mb-6">
              I am a passionate and dedicated individual with a strong
              foundation in Data Structures and Algorithms and a knack for
              problem-solving. Currently, I am honing my web development skills
              to build modern, user-friendly applications. Proficient in
              programming languages like C, C++, and Python, I thrive in
              collaborative environments and excel as a team player.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing.
            </p>
            <div className="flex justify-center">
              <a
                href="/hr_resume.pdf"
                download="himanshu-kumar-resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
              >
                <FileDown className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
