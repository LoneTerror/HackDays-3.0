import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export default function Messages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-20 bg-gray-900" id="messages">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Messages from Leadership
          </span>
          
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-8 relative"
          >
            <Quote className="absolute text-white/10 w-24 h-24 -top-4 -left-4" />
            <div className="relative z-10">
              <img
                src="https://gauhati.ac.in/media/people/1658995408.jpg"
                alt="Head of Dept."
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 mb-6"
              />
              <blockquote className="text-white text-lg mb-6">
                "Hackdays 3.0 represents our commitment to fostering innovation and technical excellence. This event brings together the brightest minds to create, compete, and collaborate."
              </blockquote>
              <div>
                <h3 className="text-white font-bold text-xl">Prof. Shikhar Kumar Sarma</h3>
                <p className="text-purple-300">Dean of Technology <br /> Head of Department <br /> Dept. of Information Technology, Gauhati University </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 relative"
          >
            <Quote className="absolute text-white/10 w-24 h-24 -top-4 -left-4" />
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/j53hJ1pG/rupam-sir.jpg"
                alt="Faculty Advisor"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-6"
              />
              <blockquote className="text-white text-lg mb-6">
                "Our goal is to provide a platform where students can showcase their skills, learn from peers, and push the boundaries of what's possible in technology."
              </blockquote>
              <div>
                <h3 className="text-white font-bold text-xl"><br />Dr. Rupam Bhattacharyya</h3>
                <p className="text-blue-300">Faculty Advisor <br /> Assistant Professor <br /> Dept. of Information Technology, Gauhati University </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}