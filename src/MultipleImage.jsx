import { ShoppingBasket, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import rod1 from "./image/rod1.png";
import rod2 from "./image/rod2.png";
import rod3 from "./image/rod3.png";
import rod4 from "./image/rod4.png";
import rod5 from "./image/rod5.png";
import tape from "./image/tape.png";
import Dimg from "./Dimg";
const MultipleImage = () => {
  return (
    <>
      <div
        className="col-view"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card"
          style={{ width: "18rem", border: "0px", margin: "20px" }}
        >
          <img src={rod1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Wooden Curtain Poles</h5>

            <a
              href="#"
              className="btn "
              style={{
                backgroundColor: " rgb(225 225 225)",
                border: "0px",
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "18rem", border: "0px", margin: "20px" }}
        >
          <img src={rod2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Metal Curtain Poles</h5>

            <a
              href="#"
              className="btn "
              style={{
                backgroundColor: " rgb(225 225 225)",
                border: "0px",
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "18rem", border: "0px", margin: "20px" }}
        >
          <img src={rod3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bay Window Curtain Poles</h5>

            <a
              href="#"
              className="btn "
              style={{
                backgroundColor: " rgb(225 225 225)",
                border: "0px",
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-view"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card"
          style={{ width: "18rem", border: "0px", margin: "20px" }}
        >
          <img src={rod4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Curtain Rails & Tracks</h5>

            <a
              href="#"
              className="btn "
              style={{
                backgroundColor: " #0C0F86",
                backgroundColor: " rgb(225 225 225)",
                border: "0px",
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "18rem", border: "0px", margin: "20px" }}
        >
          <img src={rod5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Accessories</h5>

            <a
              href="#"
              className="btn "
              style={{
                backgroundColor: " rgb(225 225 225)",
                border: "0px",
                color: "#000000",
              }}
            >
              <ShoppingCartOutlined title="Add to cart" />
              &nbsp; Add to cart
            </a>
          </div>
        </div>
      </div>
      <div
        className="fullCTA text-center w100"
        style={{
          padding: "40px 20px 40px 20px",

          color: "#fffff",
        }}
      >
        <button
          class="btn w100 "
          type="button"
          style={{
            backgroundColor: " #0C0F86",
            width: "300px",
            color: "#ffffff",
            height: "40px",
          }}
        >
          <img
            src={tape}
            style={{ width: "30px", height: "30px", marginRight: "12px" }}
          />
          <span className="fs13" style={{ fontSize: "16px", color: "#ffffff" }}>
            Curtain pole & Rail Measuring Guide
          </span>
        </button>
      </div>
      <div
        className="text-center"
        style={{
          padding: "30px 20px 30px 20px",
          fontSize: "25px",
          color: " #00024A",
        }}
      >
        Our Best Selling Products
      </div>
      <Dimg />
    </>
  );
};

export default MultipleImage;
