import { Link } from "react-router-dom";
import { Gavel } from "lucide-react";

export default function IPLAuction() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-8">
                    <Gavel className="w-12 h-12 text-green-500" />
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
                        IPL Auction 2025
                    </h1>
                </div>

                {/* Description */}
                <p className="text-2xl mb-6 text-justify leading-relaxed">
                    Step into the high-stakes world of cricket’s biggest auction!
                    Witness franchises battle it out to secure the best players, strategic buys, and game-changing picks.
                    Who will go for the highest bid? Who will be the next big steal? Be part of the thrill!
                </p>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="https://sportsmintmedia.com/wp-content/uploads/2023/12/Everything-to-know-about-the-IPL-Auction-2024.jpg"
                        alt="IPL Auction"
                        className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
                    />
                </div>

                {/* Event Details */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Rules for IPL Auction:</h2>
                    <ul className="space-y-3">
                        <li>   <strong>-</strong> Each team will consist of 3-5 members</li>
                        <li>   <strong>-</strong> Each team needs to form a squad of 9-players</li>
                        <li>   <strong>-</strong> Each team gets a fixed purse to build their squad</li>
                        <li>   <strong>-</strong> Each team may have a maximum of 3-overseas players</li>
                        <li>   <strong>- </strong> Out of those 9-players: minimum of 3-batsmen, 2-all rounders & 3-bowlers are mandatory</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                    <ul className="space-y-3">
                        <li>⚡ <strong>Format:</strong> Each player will consist of 3-5 members</li>
                        <li>💰 <strong>Budget:</strong> Each team gets 100 Crore INR to build their squad for the auction</li>
                        <li>📅 <strong>Date:</strong> March 20th, 2025</li>
                        <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/UoMm5VkgxqdFA5LV8" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">IT Auditorium, IT Dept.</a></li>
                        <li>☑️ <strong>Update:</strong> Registrations Are Full, Thank You For participating!</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="flex flex-wrap gap-4 mt-6">
                    <Link
                        to="/"
                        className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                    >
                        ← Back to Events
                    </Link>
                    <a
                        href="https://forms.gle/oz4Sg9qgFNCWZzSs9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition-transform transform hover:scale-105"
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
