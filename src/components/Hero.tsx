import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import { useEffect, useState } from "react";

const BackgroundAnimation = () => (
    <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-green-600 text-5xl font-silkscreenregular"
                initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0 }}
                animate={{ 
                    y: window.innerHeight + 100, 
                    opacity: [0.05, 0.1, 0.05], 
                    filter: "blur(3px)" 
                }}
                transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, ease: "linear" }}
            >
                {Math.random() < 0.5 ? "0" : "1"} 
            </motion.div>
        ))}
    </div>
);



// const calculateTimeLeft = (targetDate: string) => {
//     const difference = new Date(targetDate).getTime() - new Date().getTime();
//     if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//     };
// };

export default function Hero() {
    const navigate: NavigateFunction = useNavigate();

    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft("2025-03-19T09:00:00"));
    // useEffect(() => {
    //     const timer = setInterval(() => setTimeLeft(calculateTimeLeft("2025-03-19T09:00:00")), 1000);
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c] overflow-hidden">
            <Navbar />
            <BackgroundAnimation />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 px-4"
            >
                <motion.p className="text-xl pt-20 md:text-2xl text-blue-200 font-monoton">
                    Department of Information Technology
                </motion.p>
                <motion.p className="text-lg md:text-2xl pt-2 text-blue-300 font-lilita">Gauhati University</motion.p>
                <motion.p className="text-lg md:text-2xl text-blue-400 font-lilita">Presents</motion.p>

                {/* Replacing text with Image */}
                <motion.div
                    className="flex justify-center items-center mt-5"
                    animate={{ backgroundPosition: ["0% 50%", "300% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    <img
                        src="/hackdays_horizontalfull.png"
                        alt="HackDays 3.0"
                        className="w-auto max-w-[350px] h-auto"
                    />
                </motion.div>


                    <motion.div className="flex flex-col items-center gap-6 mt-6">
                        <motion.h1 className="text-lg font-brick md:text-1xl pt-4 text-red-300">
                            19th March - 21st March
                        </motion.h1>
                        <div className="flex items-center pt-0 gap-0 text-blue-200 text-1xl md:text-1xl">
                            <span className="font-brick">Event Has Ended! <br /> See you next year!</span>
                        </div>
                        {/* <div className="flex items-center pt-0 gap-0 text-blue-300 text-1xl md:text-1xl">
                            <a href="https://maps.app.goo.gl/YZUwLzD6RHpiag5a8" target="_blank" 
                            className="font-sigmar flex items-center pt-0 gap-0 text-blue-300 text-1xl md:text-1xl inline-block transition-transform transform hover:scale-105">📍Seminar Hall, GUIST Building</a>
                        </div> */}
                        {/* <div className="flex items-center pt-0 gap-0 text-red-300 text-1xl md:text-1xl">
                            <span className="animate-pulse font-brick">Event Starts In:</span>
                        </div> */}

                        {/* <div className="text-blue-300 text-2xl space-x-1 font-lilita">
                            <span>{timeLeft.days}d </span>
                            <span>{timeLeft.hours}h </span>
                            <span>{timeLeft.minutes}m </span>
                            <span>{timeLeft.seconds}s</span>
                        </div> */}

                        {/* <p className="text-blue-200 font-lilita text-lg md:text-xl max-w-2xl py-4">
                            Join us for an epic 3-day adventure including hackathons, thrilling coding challenges, and innovative tech competitions!
                        </p> */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r flex from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                            onClick={() => navigate("/register")}
                        >
                            <span className="animate-pulse-slow flex items-center gap-2">
                                Registrations Closed <Zap size={20} className="animate-bounce" />
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
        </div>
    );
}
