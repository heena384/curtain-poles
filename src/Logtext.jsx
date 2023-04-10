import React from "react";
import truck from "./image/truck.png";
import star from "./image/star.png";
import tag from "./image/tag.png";
import MultipleImage from "./MultipleImage";

const Logtext = () => {
  return (
    <>
      <div
        className="row pd20"
        style={{
          width: "100%",
          padding: "20px 20px 20px 20px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div
          className="col-sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="Jleft"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#" target="_blank" className="contact">
              <img
                src={truck}
                className=""
                style={{ height: "auto", width: "auto" }}
              />
            </a>
            <span
              className="TLAlign"
              style={{
                fontFamily: '"Raleway", sans-serif;"',
                fontSize: "14px",
                color: "#000000",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              FREE UK Delivery on all orders
              <br />
              <span
                className="TLAlign"
                style={{ margin: "0px", fontSize: "12px", color: "#7C7C7C" }}
              >
                Few words about it
              </span>
            </span>
          </div>
        </div>
        <div
          className="Jleft col-sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="Jleft"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#" target="_blank" className="contact">
              <img
                src={tag}
                className=""
                style={{ height: "auto", width: "auto" }}
              />
            </a>
            <span
              className="TLAlign"
              style={{
                fontFamily: '"Raleway", sans-serif;"',
                fontSize: "14px",
                color: "#000000",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              Upto 50% off
              <br />
              <span
                className="TLAlign"
                style={{ margin: "0px", fontSize: "12px", color: "#7C7C7C" }}
              >
                Few words about it
              </span>
            </span>
          </div>
        </div>
        <div
          className="Jleft col-sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="Jleft"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#" target="_blank" className="contact">
              <img
                src={star}
                className=""
                style={{ height: "auto", width: "auto" }}
              />
            </a>
            <span
              className="TLAlign"
              style={{
                fontFamily: '"Raleway", sans-serif;"',
                fontSize: "14px",
                color: "#000000",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              5 year guarntee
              <br />
              <span
                className="TLAlign"
                style={{ margin: "0px", fontSize: "12px", color: "#7C7C7C" }}
              >
                Few words about it
              </span>
            </span>
          </div>
          {/* <div style={{ width: "70%" }}>
            <span
              style={{
                fontFamily: '"Raleway", sans-serif;"',
                fontSize: "14px",
                color: "#000000",
                verticalAlign: "middle",
              }}
            >
              FREE UK Delivery on all orders
              <br />
              <span
                style={{ margin: "0px", fontSize: "12px", color: "#7C7C7C" }}
              >
                Few words about it
              </span>
            </span>
          </div> */}
        </div>
      </div>
      <div
        className="text-center"
        style={{
          padding: "30px 20px 30px 20px",
          fontSize: "25px",
          color: " #00024A",
        }}
      >
        About Us
      </div>
      <div
        className="text-center pd20"
        style={{
          padding: "0px 150px 30px 150px",
          fontSize: "14px",
          color: " #312528",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, , quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, , quis nostrud
        exercitation ullamco...
      </div>
      <div
        className="text-center"
        style={{
          padding: "0px 20px 30px 20px",
          fontSize: "25px",
          color: " #00024A",
        }}
      >
        Our Range
      </div>
      <MultipleImage />
    </>
  );
};

export default Logtext;
