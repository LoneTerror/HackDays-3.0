import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Samannaya Adhikari",
    year: "2023-24",
    message: "An amazing experience that helped me grow as a developer!",
    rating: 5
  },
  {
    name: "Rajdeep Das",
    year: "2023-24",
    message: "The challenges were tough but incredibly rewarding.",
    rating: 4
  },
  {
    name: "Swarup Das",
    year: "2023-24",
    message: "Great organization and learning opportunities.",
    rating: 4
  },
  {
    name: "Binit Krishna Goswami",
    year: "2023-24",
    message: "Made great connections and learned new technologies.",
    rating: 5
  },
  {
    name: "Sanchit Kumar",
    year: "2023-24",
    message: "Made great connections and learned new technologies.",
    rating: 4
  }
];

export default function Feedback() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-20 bg-[#1a1c4b]" id="feedback">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Participant Feedback
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-[#162454] p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-500"}`}
                  />
                ))}
              </div>
              <p className="text-blue-200 mb-4">{testimonial.message}</p>
              <div className="text-sm">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-blue-300">Hackdays {testimonial.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="https://forms.gle/6y14LYkQec6ijTf66"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Share Your Experience
          </motion.a>
        </div>
      </div>
    </div>
  );
}
