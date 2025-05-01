import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// Sample gallery images - replace with your actual images
const galleryImages = [
  { id: 1, src: '/P1.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: '/P2.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: '/P3.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: '/P4.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: '/P5.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: '/P6.jpg', alt: 'Gallery Image 6' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c]">
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold pt-6 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-6xl">
            <span className="block">Gallery</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Memories from our amazing events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              whileHover={{ scale: 1.07 }}
              onClick={() => openModal(image.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">Event Photo {image.id}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
            >
              <X size={24} />
            </motion.button>
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={`Full size image ${selectedImage}`}
              className="max-h-[80vh] max-w-full"
            />
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
