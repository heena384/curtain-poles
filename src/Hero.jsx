import React, { Component } from "react";
import heroimg from "./image/himg.png";
import Livetext from "./Livetext";
import Logtext from "./Logtext";

const Hero = () => {
  return (
    <>
      <div style={{ width: "100%" }} className="w100 dshow dnone1">
        <img style={{ width: "100%" }} className="w100" src={heroimg} />
      </div>
      <div className="main dnone" style={{ height: "450px" }}>
        <div
          className="left"
          style={{
            backgroundColor: " #0C0F86",
            float: "left",
            width: "50%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Livetext />{" "}
        </div>

        <div
          className="right"
          style={{
            backgroundColor: " #67A9E2",
            float: "right",
            width: "50%",
            height: "100%",
            zIndex: -1,
          }}
        ></div>
        <div className="overlap dnone" style={{ marginLeft: "-800px" }}>
          <img
            src={heroimg}
            className="im"
            style={{ height: "450px", width: "500px" }}
          />

          {/* <div className="overlay-image"></div> */}
        </div>
      </div>
      <Logtext />
    </>
  );
};

export default Hero;
