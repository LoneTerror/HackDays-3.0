import { motion } from "framer-motion";
import { Instagram, Heart, Linkedin } from "lucide-react";
import XLogo from "/icons/x.svg";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_hackdays_?igsh=MTFrdm5rb29lOWs5dg==",
    color: "hover:text-pink-500",
  },
  {
    name: "X",
    icon: XLogo,
    url: "https://x.com/_HackDays_?t=PTs5CHJUMF5BQtvVQP7VOA&s=09",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/hack-days-2-0/",
    color: "hover:text-blue-600",
  },
];

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-400 transition-colors duration-300 ${
                social.name === "X" ? "group hover:text-white" : social.color
              }`}
              whileHover="hover"
              variants={iconVariants}
            >
              {social.name === "X" ? (
                <img
                  src="/icons/x.svg"
                  alt="X Logo"
                  className="w-8 h-8 transition-colors duration-300 group-hover:brightness-0 group-hover:invert"
                />
              ) : (
                <social.icon className="w-8 h-8" />
              )}
            </motion.a>
          ))}
        </div>

        <p className="text-blue-400 text-sm mb-4">
          Follow us for updates and announcements
        </p>

        <motion.p
          className="text-blue-400 text-sm flex flex-wrap items-center justify-center gap-2 text-center max-w-full px-4"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Heart className="w-4 h-4 text-red-500" /> by  
          <a href="https://github.com/Shubrajit22">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Shubrajit Deb,
            </span>
          </a>
          <a href="https://github.com/midankalahon786">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Midanka Lahon,
            </span>
          </a>

          <a href="https://github.com/LoneTerror">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Prasun Chakraborty
            </span>
          </a>
        </motion.p>

        <p className="text-blue-400 text-sm text-center w-full mt-2">
          IT Department, Gauhati University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
