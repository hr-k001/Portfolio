import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Database, Cloud } from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs, SiPython } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: 90,
    icon: SiReact,
    color: "text-blue-400",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Node.js",
    level: 80,
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "Python",
    level: 75,
    icon: SiPython,
    color: "text-yellow-500",
  },
  {
    name: "SQL",
    level: 85,
    icon: Database,
    color: "text-purple-500",
  },
  {
    name: "AWS",
    level: 50,
    icon: Cloud,
    color: "text-orange-500",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="floating-section"
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-100">
            Skills
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`skill-icon ${skill.color}`}>
                      <Icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400">
                        Proficiency: {skill.level}%
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full rounded-full ${skill.color.replace(
                        "text",
                        "bg",
                      )}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
