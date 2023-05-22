import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Docs from "./Docs";
import Design from "./Design";
import Resource from "./Resource";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Docs />
      <Design />
      <Resource />
    </React.Fragment>
  );
};

export default Home;
