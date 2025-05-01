import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";


export default function Esports() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Gamepad2 className="w-12 h-12 text-rose-400" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent pb-2 bg-gradient-to-r from-rose-500 to-red-400">
            Esports
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Gear up for the ultimate showdown at HackDays 3.0! <br /> The Esports Tournament is here to test your gaming skills, strategy, and reflexes. <br />Whether you're a casual gamer or a competitive pro, this is your chance to showcase your dominance and claim victory!
        </p>

        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/fTD0QXH1/Esports.jpg"
            alt="Quiz"
            className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-3xl"
          />
        </div>

        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>🕒 <strong>Timing:</strong> Evening</li>
            <li>🖥️ <strong>Games:</strong> FIFA, VALORANT, BGMI & Mobile Legends</li>
            <li>🏆 <strong>Prizes & Rewards:</strong> Cash Prizes, Certificates & Schwagzz!</li>
            <li>📅 <strong>Date:</strong> March 17th, 2025 onwards</li>
            <li>📍 <strong>Note:</strong> In our tournament, only the winners receive the prize money, while all other participants are awarded certificates of participation.</li>

          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates</h2>
          <ul className="space-y-3">
            <li>☑️ <strong>Valorant:</strong> Registrations Are Full, Thank You For Registering!</li>
            <li>☑️ <strong>BGMI:</strong> Registrations Closed, Thank You For Registering!</li>
            <li>☑️ <strong>MLBB:</strong> Registrations Closed, Thank You For Registering!</li>
            <li>☑️ <strong>FIFA:</strong> Registrations Closed, Thank You For Registering!</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Registrations Closed</h2>

          {/* PDF Download Button */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {/* <a
              href="https://forms.gle/C9bxSbhj3bEzTvWY8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              FIFA 
            </a> */}
            {/* <a
              href="https://forms.gle/5MHTurZcq9ygUjfZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              Valorant 
            </a> */}
            {/* <a
              href="https://forms.gle/TannSJ55phKMy2h29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              BGMI 
            </a> */}
            {/* <a
              href="https://forms.gle/mh1ADqZivKNP8H7x8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105 text-center w-full sm:w-auto"
            >
              MLBB 
            </a> */}
          </div>
        </div>



        {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
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
        </div> */}

        {/* CTA (Call to Action) */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back to Events
          </Link>
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
