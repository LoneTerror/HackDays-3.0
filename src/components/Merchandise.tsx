import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart } from 'lucide-react';

const merchandise = [
  {
    name: "Event T-Shirt",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description: "Limited edition Hedge's 3.0 t-shirt with event logo"
  },
  {
    name: "Developer Hoodie",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    description: "Comfortable hoodie perfect for those long coding sessions"
  },
 
  {
    name: "Sticker Pack and Goodies",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800",
    description: "Collection of cool tech,goodies and gaming stickers"
  }
];

export default function Merchandise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-20 bg-gray-800" id="merchandise">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Official Merchandise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchandise.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-purple-400 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Out of Stock
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}