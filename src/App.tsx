import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Landing from "./components/Landing";
import EventCard from "./components/EventCard";
import Events from "./components/Events";
import Hackathon from "./components/Hackathon";
import BugBounty from "./components/BugBounty";
import Quiz from "./components/Quiz";
import TypingSpeed from "./components/TypingSpeed";
import IPLAuction from "./components/IPLAuction";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Merch from "./components/Merch";
import ContactUs from "./components/ContactUs";
import ChessTournament from "./components/ChessTournament";
import Codegem from "./components/Codegem";
import Esports from "./components/Esports";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventCard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        <Route path="/events/bug-bounty" element={<BugBounty />} />
        <Route path="/events/quiz" element={<Quiz/>} />
        <Route path="/events/typing-speed" element={<TypingSpeed />} />
        <Route path="/events/ipl-auction" element={<IPLAuction />} />
        <Route path="/events/chess-tournament" element={<ChessTournament />} />
        <Route path="/events/codegem" element={<Codegem />} />
        <Route path="/events/esports" element={<Esports />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
