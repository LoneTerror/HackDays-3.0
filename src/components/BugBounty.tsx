import { Link } from "react-router-dom";
import { Search } from "lucide-react";


export default function BugBounty() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-8">
                    <Search className="w-12 h-12 text-yellow-500" />
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
                        Bug Bounty Hunt
                    </h1>
                </div>

                {/* Description */}
                <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
                    Discover vulnerabilities, solve puzzles, and earn your spot as the top bug hunter! This event challenges your cybersecurity and problem-solving skills. Are you ready to dive into the digital trenches and hunt for bugs?
                </p>

                <div className="flex justify-center">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*ZtWgnkA5DD0sd7lgOh5mig.png"
                        alt="Bug Bounty"
                        className="rounded-lg w-full pb-20 max-w-md md:max-w-lg lg:max-w-xl"
                    />
                </div>



                {/* Event Details */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                    <ul className="space-y-3">
                        <li>🕒 <strong>Timing:</strong> 3:00 PM - 4:00 PM | 1hour</li>
                        <li>👥 <strong>Team Size:</strong> 1 - 3 Participants per team</li>
                        <li>🏆 <strong>Prizes:</strong> Exciting Cash Rewards 💵💰</li>
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
                        href="https://forms.gle/Nq4EXyCZhG35J3d9A"
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
