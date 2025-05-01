import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

export default function Sponsors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const sponsors = [
    'https://i.postimg.cc/RFwR3PdT/oil-india.jpg',
    'https://i.postimg.cc/VkH4205X/iocl.png',
    'https://i.postimg.cc/X7dBr88C/innovation.jpg',
    'https://i.postimg.cc/0NTnygYQ/Gplus.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMrZoyifOevihovOxvJY-oF0meg0LC-oOtg&s',
    'https://i.postimg.cc/vHbPndpx/meal-by-box.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0t_MVuJUkDmYRIHdFALAzd_spGi72DUmsQ&s',
    'https://i.postimg.cc/8cPpYzyf/decathlon.webp',
    'https://images.unsplash.com/vector-1741113755107-5fa5aa1b8da0?q=80&w=2440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://i.postimg.cc/sx8xMBBK/raju-reyaz.jpg',
  ];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="py-16 bg-gray-800" id="sponsors">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Our Sponsors
          </span>
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex"
            initial={{ x: 500 }}
            animate={{ x: -containerWidth }}
            transition={{
              ease: "linear",
              duration: 12,
              repeat: Infinity,
            }}
          >
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-32 md:w-48 h-32 md:h-48 mx-4 bg-white rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}