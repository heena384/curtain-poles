import React from "react";
import Grid1 from "./Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Review from "./Review";
import Bottom from "./footer";

const App = () => {
  return (
    <>
      <Grid1 />
      <Navbar />
      <hr bgcolor="#0C0F86" width="100%"></hr>
      <Hero />
      <Review />
      <Bottom />
    </>
  );
};
export default App;
