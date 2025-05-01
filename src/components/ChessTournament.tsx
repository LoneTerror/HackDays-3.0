import { Link } from "react-router-dom";
import Chess from "/icons/chess-rook.png";


export default function Quiz() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <img src = {Chess} alt="Chess" className="w-12 h-12 text-emerald-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Chess
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
        Step into the arena of strategic battles and test your intellect in the TechFest Chess Tournament! <br /> Whether you're a upcoming grandmaster or a budding chess enthusiast, this is your chance to showcase your tactical brilliance, outmaneuver opponents, and claim victory on the 64 squares.
        </p>

        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/0N6Ycyqt/Chess.jpg"
            alt="Chess"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>🕒 <strong>Timing:</strong> 2:00 PM Onwards</li>
            <li>⏳ <strong>Time Control:</strong> 5+2</li>
            <li>⚔️ <strong>Game Format:</strong> Knockout Tournament, Single-Game Elimination</li>
            <li>📅 <strong>Date:</strong> March 19th, 2025</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/YZUwLzD6RHpiag5a8" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; Seminar Hall - GUIST Building</a> </li>
          </ul>
        </div>
        {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rules & Regulations</h2>
          <ul className="space-y-3">
            <li>
               <strong>Rules:</strong> 
            </li>
            <li> <strong>Rules are meant to break</strong> </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Judging Criteria</h2>
          <ul className="space-y-3">
            <li>
              🕒 <strong></strong> 
            </li>
            <li>👥 <strong>Judges:</strong> IDK</li>
          </ul>
        </div> */}

        {/* CTA (Call to Action) */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back to Events
          </Link>
          <a
            href="https://forms.gle/4hs4Dq5KUJJdi5UK8"
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
