import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass-card rounded-xl p-12"
        >
          <div className="space-y-8">
            <div className="flex items-center space-x-6 group">
              <div className="p-4 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                <Mail className="text-blue-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  hkraj9105@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="p-4 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                <Phone className="text-green-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +91 7563 04 9735
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="p-4 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <MapPin className="text-purple-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-1">
                  Location
                </h3>
                <span className="text-gray-300">Chandigarh, IN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
