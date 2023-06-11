import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LikeSchool from "./LikeSchool";
import LearningSystem from "./LearningSystem";
import Footer from "./Footer";
import Copyright from "./Copyright";
import OurValues from "./OurValues";
import OurTeam from "./OurTeam";

const Home = () => {
  useEffect(() => {
    window.document.body.style.overflowY = "scroll";
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <LikeSchool />
      <LearningSystem />
      <OurValues />
      <OurTeam />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
