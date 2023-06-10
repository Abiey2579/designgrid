import Copyright from "../Copyright";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Objectives from "./Objectives";
import OurFounder from "./OurFounder";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurFounder />
      <Objectives />
      <Footer />
      <Copyright />
    </div>
  );
};

export default AboutUs;
