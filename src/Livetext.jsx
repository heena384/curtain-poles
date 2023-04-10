import React from "react";

const Livetext = () => {
  return (
    <>
      <div className="live main" style={{ paddingTop: "100px" }}>
        <div
          className="head1"
          style={{
            width: "82%",
            height: "100%",
            padding: "40px 20px 0px 20px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "28px", color: "#ffffff" }}>
            High-Quality Curtain poles Just For You
          </span>
          <br />
          <br />
          <span
            style={{ fontSize: "14px", color: "#ffffff", paddingRight: "20px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <br />
          <br />
          <a href="#">
            <button
              type="button"
              style={{ color: "#ffffff", cursor: "pointer" }}
              className="btn btn-primary btn-lg"
            >
              Shop now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Livetext;
