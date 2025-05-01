import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const posters = [
  {
    title: "Hackathon Challenge",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800",
    description: "3-day cumulative marathon of coding, innovation, and problem-solving. Join us for the ultimate hackathon experience!"
  },
  {
    title: "Gaming Tournament",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    description: "Compete in Valorant, BGMI & FIFA. Show your gaming skills and win big prizes!"
  },
  {
    title: "Chess Championship",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800",
    description: "Strategic minds battle it out in our digital chess tournament. Are you the next grandmaster?"
  },
  {
    title: "Bug Bounty Hunt",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    description: "Find vulnerabilities, solve puzzles & earn rewards in our security challenge!"
  }
];

export default function Posters() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-20 bg-gray-900" id="posters">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Event Posters
          </span>
         
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <ExternalLink className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{poster.title}</h3>
                <p className="text-gray-400">{poster.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}