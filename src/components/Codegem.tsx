import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";


export default function Codegem() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Code2 className="w-12 h-12 text-rose-400" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent pb-2 bg-gradient-to-r from-purple-700 to-red-400">
            Codegem
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Are you ready to crack the code and prove your programming prowess? <br />CodeGem is the ultimate coding competition at HackDays 3.0, designed to challenge your problem-solving skills, logical thinking, and algorithmic expertise. <br />Compete with the best minds, solve complex problems, and claim your place among the coding elite!
        </p>

        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/8kLPKMcr/Codegem.avif"
            alt="Quiz"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rules & Regulations</h2>
          <ul className="space-y-3">
            <li>
              <strong>Rules:</strong>
            </li>
            <li>-<strong> The contest follows the ICPC format, where teams compete to solve algorithmic problems within a fixed time</strong> </li>
            <li>-<strong> A 10-minute penalty is added to the total time for each incorrect submission on a problem</strong> </li>
            <li>-<strong> Teams are ranked based on the number of problems solved</strong> </li>
            <li>-<strong> Using AI-powered tools such as ChatGPT, GitHub Copilot, or any LLM-based assistance is strictly prohibited</strong> </li>
          </ul>
        </div>
        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>🕒 <strong>Timing:</strong> 1:00 - 3:30 PM</li>
            <li>👥 <strong>Team Size:</strong> 1-2 Members</li>
            <li>🖥️ <strong>Languages Allowed:</strong> C++, Python, Java</li>
            <li>📅 <strong>Date:</strong> March 20th, 2025</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/QzerbfJXZrqr1Hw48" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; IT Dept, Gauhati University</a> </li>
          </ul>
        </div>

        {/* CTA (Call to Action) */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back to Events
          </Link>
          <a
            href="https://forms.gle/k1YKxDydY6BGTdJm6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105"
          >
            Registrations Closed 
          </a>
          <Link
            to="/register"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            More Events
          </Link>
        </div>
      </div>
    </div>
  );
}
