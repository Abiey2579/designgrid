import { useEffect } from "react";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Objectives from "./Objectives";
import OurFounder from "./OurFounder";

const AboutUs = () => {
  useEffect(() => {
    window.document.body.style.overflowY = "scroll";
  }, []);
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
