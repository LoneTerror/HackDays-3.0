import { Link } from "react-router-dom";
import { Timer } from "lucide-react";
import PS from "/documents/Hackathon-PS.pdf";
import Rules from "/documents/Rules.jpg";
import JC from "/documents/JC.jpg";


export default function Hackathon() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Timer className="w-12 h-12 text-purple-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Hackathon Event
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Code your way to glory in this hackathon.
          Collaborate, innovate, and push your limits to solve real-world
          problems. Compete among others, give your best and stand a chance to win exciting
          prizes!
        </p>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800"
            alt="Hackathon Image"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem Statements:</h2>
          <ul className="space-y-3">
            <li><strong> 1.</strong> AI & Generative AI Integration</li>
            <li><strong> 2.</strong> Blockchain & Cybersecurity</li>
            <li><strong> 3.</strong> Social Good & Sustainability</li>
            <li><strong> 4.</strong> Internal Workplace & Cultural Innovation</li>
            <li><strong> 5.</strong> Business Optimization</li>
            <li><strong> 6.</strong> Entertainment & Gaming</li>
            <li><strong> 7.</strong> Open Innovation</li>
          </ul>
          {/* PDF Download Button */}
          <div className="flex flex flex-wrap justify-center mt-8">
            <a
              href={PS}
              download="Hackathon - Problem Statement.pdf"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Download Problem Statements Here
            </a>
          </div>

        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Rules & Judging Criteria</h2>
          <ul className="space-y-3">
            <li>   <strong>-</strong> Each team will consist of 1-5 participants</li>
            <li>   <strong>-</strong> The hackathon is open to individuals or teams</li>
            <li>   <strong>-</strong> It is not compulsory for the participating students to be present on each day of the event, Hack Days 3.0</li>
            <li>   <strong>-</strong> Participants must register before the deadline of 21st March and provide accurate details</li>
            <li>   <strong>- </strong> All the members in a team must be present on the day of hackathon</li>
            <li>   <strong>- </strong> Projects must be open-sourced on GitHub on the day of hackathon</li>
            <li> 🔷 <strong> </strong> For complete details about judging criteria and rules click below </li>
          </ul>
          <div className="flex flex-wrap gap-10 justify-center mt-8">
            <a
            href={Rules}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-400 to-rose-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Rules
            </a>
            <a
            href={JC}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-400 to-rose-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Judging Criteria
            </a>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>
              🕒 <strong>Timing:</strong> Week Long Event | Participants must be present for locking problem statement alongwith their ID - Cards
            </li>
            <li>👥 <strong>Team Size:</strong> 1-5 Participants</li>
            <li>🏆 <strong>Prizes:</strong> Exciting Cash Rewards & Schwagzz!</li>
            <li>📅 <strong>Date:</strong> March 19 - 21st, 2025 | Submission Date: On or before 21st March</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/YZUwLzD6RHpiag5a8" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; Seminar Hall - GUIST Building</a> </li>
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
            href="https://forms.gle/g7bqPKJiuT2XXCw16"
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
    </div >
  );
}
