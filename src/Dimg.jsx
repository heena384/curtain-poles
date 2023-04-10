import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";

const Dimg = () => {
  return (
    <>
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <div style={{ width: "240px" }}>
          <img src={img1} style={{ width: "240px", paddingTop: "50px" }} />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#"
              className=" textcenter"
              style={{
                textDecoration: "none",
                border: "0px",
                color: "#000000",

                marginTop: "10px",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
        <div style={{ width: "240px" }}>
          <img src={img2} style={{ width: "240px" }} />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#"
              className=" textcenter"
              style={{
                textDecoration: "none",
                border: "0px",
                color: "#000000",

                marginTop: "10px",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
        <div style={{ width: "240px" }}>
          <img src={img3} style={{ width: "240px", paddingTop: "50px" }} />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#"
              className=" textcenter"
              style={{
                textDecoration: "none",
                border: "0px",
                color: "#000000",

                marginTop: "10px",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
      </div>
      <div class="text-center" style={{ padding: "40px 0px 20px 0px" }}>
        <button
          type="button"
          class="btn "
          style={{
            backgroundColor: " rgb(225 225 225)",
            border: "0px",
            color: "#000000",
            width: "200px",
            fontSize: "18px",
          }}
        >
          View all
        </button>
      </div>
    </>
  );
};

export default Dimg;
