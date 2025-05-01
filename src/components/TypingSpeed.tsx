import { Link } from "react-router-dom";
import { Keyboard } from "lucide-react";


export default function TypingSpeed() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Keyboard className="w-12 h-12 text-purple-400" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent pb-2 bg-gradient-to-r from-purple-600 to-blue-300">
            Typing Speed
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Do you have the fastest fingers and the sharpest accuracy? Put your typing skills to the test in the TechFest Typing Speed Challenge! <br /> Compete against fellow tech enthusiasts, programmers, and keyboard warriors to prove your speed and precision.
        </p>

        <div className="flex justify-center">
          <img
            src="https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2019/12/Typing-Speed-Test-Project-in-Python.gif"
            alt="Quiz"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rules & Guidelines</h2>
          <ul className="space-y-3">
            <li>
              <strong>Rules:</strong>
            </li>
            <li>-<strong> This event is open for all and registration can be done on-spot also</strong> </li>
            <li>-<strong> Participants will complete a typing test using a pre-selected platform or tool (Platform will be revealed on the day of the event)</strong> </li>
            <li>-<strong> There will be 3 rounds based on the number of participants</strong> </li>
            <li>-<strong> Scoring System: Words Per Minute(WPM) * (Accuracy/100)</strong> </li>
          </ul>
        </div>
        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>👥 <strong>Team Size:</strong> Solo</li>
            <li>📅 <strong>Date:</strong> March 21st, 2025</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/3UDtCPMKk448PdTa6" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; Seminar Hall, GUIST</a> </li>
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
            href="https://forms.gle/QmrPXVfSmdd29hkE9"
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
