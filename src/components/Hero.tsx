import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center cosmic-bg">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-white"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Himanshu Kumar</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl lg:text-2xl mb-8 text-gray-300"
          >
            Full Stack Developer & Software Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/hr-k001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-kumar-490825245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="himanshukumar14092003@gmail.com"
              className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mb-12 lg:mb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="cosmic-portal">
              <div className="portal-ring" />
              <div className="portal-ring" style={{ animationDelay: "2s" }} />
              <div className="portal-ring" style={{ animationDelay: "4s" }} />
              <div className="relative w-72 h-96 lg:w-[400px] lg:h-[600px] mx-auto overflow-hidden rounded-3xl">
                <img
                  src="/himanshu4.jpg"
                  alt="Himanshu Kumar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
