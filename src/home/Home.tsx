import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Docs from "./Docs";
import Design from "./Design";
import Resource from "./Resource";
import CTA from "./CTA";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Docs />
      <Design />
      <Resource />
      <CTA />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
