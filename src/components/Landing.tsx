import Hero from "./Hero";
import Events from "./Events";
import Sponsors from "./Sponsors";
// import Posters from "./Posters";

import Messages from "./Messages";
import Feedback from "./Feedback";
import Footer from "./Footer";


const Landing = () => {
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Events />
      <Sponsors />
      {/* <Posters /> */}
      <Messages />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Landing;
