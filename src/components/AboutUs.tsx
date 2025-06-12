import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    github?: string;
    linkedin?: string;
    email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
    name,
    role,
    image,
    github,
    linkedin,
    email,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
        >
            <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">{name}</h3>
                <p className="text-indigo-400 text-center mb-4">{role}</p>
                <div className="flex justify-center space-x-4">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const AboutUs: React.FC = () => {
    const teamMembers = [
        {
            name: "Shubrajit Deb",
            role: "Event Management Lead",
            image: "https://i.postimg.cc/sDH3JqwT/Subhrajit-Deb.jpg",
            github: "https://github.com/Shubrajit22",
            linkedin: "https://www.linkedin.com/in/shubrajit-deb-034467272/",
            email: "shubrajit@example.com",
        },
        {
            name: "Arijit Banik",
            role: "Event Management Co-Lead",
            image: "https://i.postimg.cc/Bb3rqcNL/Arijit.jpg",
            github: "https://github.com/arijitb17",
            linkedin: "https://www.linkedin.com/in/arijit-banik-485610246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            email: "arijitb017@gmail.com",
        },
        {
            name: "Abhijit Kumar Baishya ",
            role: "Public Relations & Marketing Head",
            image: "https://i.postimg.cc/1tDxhY01/Abhijit-Baishya.jpg",
            github: "https://github.com/abhibaishya07",
            linkedin: "https://www.linkedin.com/in/abhijit-baishya-978a28253/",
            email: "abhibaishya07@gmail.com",
        },
        {
            name: "Pragyan Paul ",
            role: "Public Relations & Marketing Lead",
            image: "https://i.postimg.cc/nLy8WtD1/Pragyan-Paul.jpg",
            github: "https://github.com/Pragyan5782",
            linkedin: "https://www.linkedin.com/in/pragyan-paul-7190b8262",
            email: "abhibaishya07@gmail.com",
        },
        {
            name: "Rishikesh Verma",
            role: "Public Relations & Marketing Co-Lead",
            image: "https://i.postimg.cc/tTgLzksH/Rishikesh-Verma.jpg",
            github: "https://github.com/Rishikesh-Verma69",
            linkedin: "https://www.linkedin.com/in/rishikesh-verma-aab4a1256/",
            email: "rishiv903@gmail.com",
        },
        {
            name: "Geetartha Bordoloi",
            role: "Finance Lead",
            image: "https://i.postimg.cc/0yNqMnv7/Geetartha-Bordoloi.jpg",
            github: "https://github.com/Geet2002",
            linkedin: "https://www.linkedin.com/in/geetartha-bordoloi",
            email: "geetarthabordoloi936@gmail.com",
        },
        {
            name: "Snehal Kalita",
            role: "Finance Co-Lead",
            image: "https://i.postimg.cc/fbtn5bJL/Snehal-Kalita.jpg",
            github: "https://github.com/SnehalKalita",
            linkedin: "http://linkedin.com/in/snehal-kalita-1bb274301",
            email: "snehalkalita@gmail.com",
        },
        {
            name: "Purab Jyoti Kashyap",
            role: "Design & Creative Lead",
            image: "https://i.postimg.cc/gJF5DqCS/Whats-App-Image-2025-03-09-at-11-50-32-AM-Purab-Kashyap.jpg",
            github: "https://github.com/PurabR",
            linkedin: "https://www.linkedin.com/in/purabkashyap/",
            email: "purab2013@gmail.com",
        },
        {
            name: "Monaswi Kumar Bharadwaj",
            role: "Event Coordinator Head",
            image: "https://i.postimg.cc/fRgQxdWp/Monaswi-Kumar.jpg",
            github: "https://github.com/Monaswi0104",
            linkedin: "https://www.linkedin.com/in/monaswi-kumar-bharadwaj-051713296/",
            email: "bharadwajmonaswi@gmail.com",
        },
        {
            name: "Subarna Saikia",
            role: "Event Coordinator Lead",
            image: "https://i.postimg.cc/m22n8rns/black-Subarna-Saikia.png",
            github: "https://github.com/subarnasaikia",
            linkedin: "https://www.linkedin.com/in/subarna-saikia/",
            email: "subarnasaikia2@gmail.com",
        },
        {
            name: "Abhisekh Roy",
            role: "Event Coordinator Co-Lead",
            image: "https://i.postimg.cc/zX0srhhv/Abhishek-Roy.jpg",
            github: "github.com/Abhisekh29",
            linkedin: "https://www.linkedin.com/in/abhisekh-roy-b5aa29272/",
            email: "abhisekhroy2912@gmail.com",
        },
        {
            name: "Jurin Deep Das",
            role: "Event Coordinator Co-Lead",
            image: "https://i.postimg.cc/DwNRWKBK/Jurin-Deep-Das.jpg",
            github: "https://github.com/Jurindeepdb",
            linkedin: "https://www.linkedin.com/in/jurin-deep-das",
            email: "jurindeepdas@gmail.com",
        },
        {
            name: "Prasun Chakraborty",
            role: "E-Sports Coordinator Head",
            image: "https://i.postimg.cc/90LV1pjB/pic.png",
            github: "https://github.com/LoneTerror",
            linkedin: "https://www.linkedin.com/in/prasun-chakraborty-287246257/",
            email: "nothingshere21@gmail.com",
        },
        {
            name: "Midanka Lahon",
            role: "E-Sports Coordinator Lead",
            image: "https://i.postimg.cc/rsNxF19K/midanka.jpg",
            github: "https://github.com/midankalahon786",
            linkedin: "https://www.linkedin.com/in/midanka-lahon-1946b8255/",
            email: "midankalahon@gmail.com",
        },
        {
            name: "Anilabh Barua",
            role: "E-Sports Coordinator Co-Lead",
            image: "https://i.postimg.cc/7YX0FN6R/anilabh.png",
            github: "https://github.com/AnilabhBarua",
            linkedin: "https://www.linkedin.com/in/barua24/",
            email: "anilabh.barua@gmail.com",
        },
        {
            name: "Bhargav Shivam",
            role: "E-Sports Coordinator Co-Lead",
            image: "https://i.postimg.cc/BZTxg3G4/bhargav-removebg-preview.png",
            github: "https://github.com/BhargavShivam7",
            linkedin: "https://www.linkedin.com/in/bhargav-shivam-54bab1256/",
            email: "bhargavshivamcr7@gmail.com",
        },
        {
            name: "Ashmit Karmakar",
            role: "Marketing & Promotional Lead",
            image: "https://i.postimg.cc/NFQnhGfR/IMG-20250301-WA0006-2-Ashmit-Karmakar.jpg",
            github: "https://github.com/Ashmitkarmakar",
            linkedin: "https://www.linkedin.com/in/ashmit-karmakar-1885b5238/",
            email: "ashmitkarmakar5@gmail.com",
        },
        {
            name: "Bhagyashree Thakuria ",
            role: "Marketing & Promotional Co-Lead",
            image: "https://i.postimg.cc/8zcqPCdH/Bhagyashree-Thakuria.jpg",
            github: "https://github.com/bhgythkuria",
            linkedin: "https://www.linkedin.com/in/bhagyashree-thakuria-816152308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "bhagyashreethakuria113@gmail.com",
        },
        {
            name: "Bikash Bora",
            role: "Design & Creatives Co-Lead",
            image: "https://i.postimg.cc/J41fvxGS/Bikash-Bora.jpg",
            github: "https://github.com/Bikash62521",
            linkedin: "https://www.linkedin.com/in/bikash-bora-b67690256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "borab796@gmail.com",
        },
        {
            name: "Gautam Hazarika",
            role: "Technology Team Lead",
            image: "https://i.postimg.cc/FKJ83nBk/Gautam-Hazarika.png",
            github: "https://www.github.com/gautam84",
            linkedin: "https://www.linkedin.com/in/gautamhazarika",
            email: "gautamhazarika01@gmail.com",
        },
        {
            name: "Neelim Sikhar Borah",
            role: "Technology Team Co-Lead",
            image: "https://i.postimg.cc/7PNc3zm9/pic-Neelim-Sikhar-Borah.jpg",
            github: "https://github.com/Neil-9352",
            linkedin: "https://www.linkedin.com/in/neelim-s-borah-40481126a/",
            email: "borahneelims@gmail.com",
        },
        {
            name: "Kaushik Sarma",
            role: "Attendee Engagement Lead",
            image: "https://i.postimg.cc/4y1rn7F8/Kaushik-Sarma.jpg",
            github: "https://github.com/Student-KaushikSarma",
            linkedin: "https://www.linkedin.com/in/kaushik-sarma-318525329",
            email: "kaushiksarma972@gmail.com",
        },
        {
            name: "Manwinder Singh",
            role: "Attendee Engagement Co-Lead",
            image: "https://i.postimg.cc/B6TzwPsq/Manwinder-Singh.jpg",
            github: "https://github.com",
            linkedin: "https://www.linkedin.com/in/manwinder-singh-86353a215",
            email: "risingsingh440@gmail.com",
        },
        {
            name: "Dikshita Dutta",
            role: "Attendee Engagement Co-Lead",
            image: "https://i.postimg.cc/Vv4Vzydp/Dikhshita-Dutta.jpg",
            github: "https://github.com/dikshitadutta",
            linkedin: "https://www.linkedin.com/in/dikshita-dutta-9a6194296",
            email: "dikshitadutta888@gmail.com",
        },
        {
            name: "Bikash Nath",
            role: "Attendee Engagement Co-Lead",
            image: "https://i.postimg.cc/7PMvKdYg/Bikash-Nath.jpg",
            github: "https://github.com/Bikash0nath",
            linkedin: "https://www.linkedin.com/in/bikash-nath-7a8397258/",
            email: "nathbikash231@gmail.com",
        },
        {
            name: "Debobrata Das",
            role: "Attendee Engagement Co-Lead",
            image: "https://i.postimg.cc/kX1pZmrt/20250306-153640-Debobrata-Das.jpg",
            github: "https://github.com/debo-220102022",
            linkedin: "https://www.linkedin.com/in/debobrata-das-b51059265/",
            email: "debobrata2000das@gmail.com",
        },
    
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c]">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-5xl font-extrabold pt-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-5xl mb-6">
                        About Gauhati University
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            Gauhati University, established in 1948, stands as the oldest and largest university in Northeast India, with over 350 affiliated colleges offering undergraduate and postgraduate courses across seven faculties: Arts, Science, Commerce & Management, Law, Medicine & Allied Health Sciences, and Engineering & Technology. Situated on the western fringe of Guwahati, approximately 15 kilometers from the city center, the university’s scenic campus is bordered by the majestic Brahmaputra River. It holds the distinction of being the first state university in India to receive the ISO 9001:2015 Certification with NABCB Accreditation. In 2024, Gauhati University achieved an A+ grade with a CGPA of 3.32 from NAAC, reaffirming its commitment to academic excellence. Additionally, the university secured the 44th position in the academic category in the prestigious Nature Index 2024, further establishing itself as a leading institution in higher education and research in India.
                        </p>
                        <h5 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-4xl mb-6">
                            About Dept. of Information Technology
                        </h5>
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            The Department ofInformation
                            Technology under the Faculty of
                            Technology, Gauhati University has
                            been established in the year 2009
                            for different Undergraduate,
                            Postgraduate and Research
                            programmes in the field of
                            Computer and Information
                            Technologies.
                        </p>
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            HackDays is a premier tech event that brings together coding enthusiasts,
                            innovators, and tech lovers for an epic 3-day adventure of hackathons,
                            coding challenges, and tech competitions.HackDays 3.0 is the flagship Annual TechFest cum
                            Hackathon organized by the Department of Information
                            Technology, Gauhati University, offering a dynamic
                            platform for students, researchers, and professionals to
                            showcase their technical skills, creativity, and problem solving abilities. Formerly known as Utkranti, the event
                            had four successful seasons from 2018 to 2021. It was
                            rebranded as HackDays in 2023, with HackDays 1.0
                            followed by HackDays 2.0 in 2024. Now, we're set to host
                            HackDays 3.0 in 2025. The event features coding
                            competitions, technical workshops, expert talks, and
                            hands-on innovation challenges, engaging participants
                            with real-world technological advancements. Our mission
                            is to bridge the gap between academia and industry,
                            promote collaboration .
                        </p>
                        {/* <p className="text-xl text-gray-300">
                            Founded in 2022, our mission is to foster creativity, collaboration,
                            and technical excellence among participants while creating a platform
                            for networking and knowledge sharing.
                            </p> */}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-8 mb-16"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-b from-indigo-300 to-red-300 text-transparent bg-clip-text mb-6 text-center">Our Vision</h2>
                        <p className="text-xl text-gray-300 text-center">
                            To create an inclusive tech community that empowers individuals to push their boundaries,
                            learn new skills & build innovative solutions to real-world problems.
                        </p>
                    </motion.div>
                </motion.div>


                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        <span className="text-indigo-400">Core-Team</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Have questions or want to collaborate? We'd love to hear from you!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <a href="/contact" className="w-full h-full block">
                            Contact Us
                        </a>
                    </motion.button>


                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
