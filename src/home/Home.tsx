import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FrontenGuide from "./FrontenGuide";
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
      <FrontenGuide />
      <Blog />
      <OurFounder />
      <CTA />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
