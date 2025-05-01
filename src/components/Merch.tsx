
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import Footer from "./Footer";

const merchandise = [
  //   
  //   {
  //     name: "Developer Hoodie",
  //     price: "₹999",
  //     image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  //     description: "Comfortable hoodie perfect for those long coding sessions"
  //   },
  //   {
  //     name: "Sticker Pack and Goodies",
  //     price: "₹199",
  //     image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800",
  //     description: "Collection of cool tech, goodies and gaming stickers"
  //   },
  {
    name: "HackDays 3.0 Official T-Shirt",
    price: "₹299",
    image: "/front .png",
    backImage: "/back.png",
    description: "Limited edition event t-shirt with custom design"
  },
  {
    name: "Limited Oversized T-Shirt",
    price: "₹399",
    image: "/Oversizedf.png",
    backImage: "/Oversizedb.png",
    description: "Limited edition Hedge's 3.0 t-shirt with event logo"
  },
];

const Merch: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c]">
      <Navbar />
      <div className="container mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-6xl mb-6">
            Official Merchandise
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              Rep HackDays with our exclusive merchandise collection. High-quality products designed for tech enthusiasts.
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-indigo-500"
            >
              {item.backImage ? (
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img
                    src={item.image}
                    alt={`${item.name} Front`}
                    className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    src={item.backImage}
                    alt={`${item.name} Back`}
                    className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-purple-400 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <motion.a
                  href="https://forms.gle/hSZsd1RUVAYkMJJA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                >
                  Out of Stock
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">How to Order</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 max-w-2xl mx-auto">
            <li>Select your preferred merchandise</li>
            <li>Fill out the order form with your details</li>
            <li>Complete the payment through the available options</li>
            <li>Receive your awesome HackDays merchandise!</li>
          </ol>
          {/* <div className="text-center mt-6">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScDY-kWldzG_o17gvyvojfgihdgMK69ksC6FMaXc64VZ-8y1w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/25"
            >
              Order Form
            </motion.a>
          </div> */}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Merch;
