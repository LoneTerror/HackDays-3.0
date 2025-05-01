import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";


export default function Quiz() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="w-12 h-12 text-emerald-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
            Quiz
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Get ready to challenge your knowledge and compete with the brightest minds at HackDays 3.0! <br /> This exciting quiz will test your expertise in technology, general knowledge, and emerging innovations. Whether you're a tech enthusiast or just love a good challenge, this is your chance to shine!
        </p>

        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/nzJcphwL/Quiz.avif"
            alt="Quiz"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>🕒 <strong>Timing:</strong> 9:30 - 11:30 AM</li>
            <li>👥 <strong>Team Size:</strong> Solo or Duo (Max of 2 members)</li>
            <li>🦅 <strong>Theme:</strong> General + Science and Technology [Special Round]</li>
            <li>📅 <strong>Date:</strong> March 20th, 2025</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/UoMm5VkgxqdFA5LV8" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; Classroom V, IT Dept.</a> </li>
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
            href="https://forms.gle/bXb7FZFiNA4WYie27"
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
