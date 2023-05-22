import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Docs from "./Docs";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Docs />
    </React.Fragment>
  );
};

export default Home;
