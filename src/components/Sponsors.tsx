import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sponsors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sponsors = [
    'https://i.postimg.cc/RFwR3PdT/oil-india.jpg',
    'https://i.postimg.cc/VkH4205X/iocl.png',
    'https://i.postimg.cc/0NTnygYQ/Gplus.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMrZoyifOevihovOxvJY-oF0meg0LC-oOtg&s',
    'https://i.postimg.cc/vHbPndpx/meal-by-box.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0t_MVuJUkDmYRIHdFALAzd_spGi72DUmsQ&s',
    'https://i.postimg.cc/8cPpYzyf/decathlon.webp',
  ];

  return (
    <div className="py-16 bg-gray-800" id="sponsors">
      {/* 1. The Animation Logic (CSS is faster than JS for this) */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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

        <div className="relative overflow-hidden w-full mask-edges">
          {/* 2. Pure CSS Container */}
          <div 
            className="animate-marquee" 
            style={{ animationDuration: '10s' }} // <--- CHANGE THIS FOR SPEED (Lower is faster)
          >
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-32 md:w-48 h-32 md:h-48 mx-4 bg-white rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index % sponsors.length}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}