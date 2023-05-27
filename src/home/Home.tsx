import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LearningPath from "./LearningPath";
import Blog from "./Blog";
import OurFounder from "./OurFounder";
import CTA from "./CTA";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <LearningPath />
      <Blog />
      <OurFounder />
      <CTA />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
