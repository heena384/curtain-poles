import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

import {
  Call,
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@material-ui/icons";
import LocationOnIcon from "@material-ui/icons";

const Bottom = () => {
  return (
    <>
      <div style={{ width: "100%", justifyContent: "center" }}>
        <MDBFooter
          className="text-center"
          color="white"
          bgColor="#0C0F86"
          style={{ backgroundColor: "#0C0F86" }}
        >
          <div className="p-4">
            <section className="mb-4">
              {/* <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn> */}
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <Facebook style={{ fontSize: "22px" }} />
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <Instagram style={{ fontSize: "22px" }} />
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <LinkedIn style={{ fontSize: "22px" }} />
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <Mail style={{ fontSize: "22px" }} />
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <Call style={{ fontSize: "22px" }} />
              </MDBBtn>
            </section>

            <section className="">
              <form action="">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol size="auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </MDBCol>

                  <MDBCol md="5" start>
                    <MDBInput
                      contrast
                      type="email"
                      label="Email address"
                      className="mb-4"
                    />
                  </MDBCol>

                  <MDBCol size="auto">
                    <MDBBtn
                      outline
                      color="light"
                      type="submit"
                      className="mb-4"
                    >
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>

            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </section>

            <section className="">
              <MDBRow>
                <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Visit Us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a
                        href="#!"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <Home style={{ marginRight: "5px" }} />
                        Box 5205, 102 45 London
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Mail us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a
                        href="#!"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <Mail style={{ marginRight: "5px" }} />
                        thepolestore.co.uk
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Call us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a
                        href="#!"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <Call style={{ marginRight: "5px" }} />
                        08-654 74 90
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Products</h5>

                  <ul className="list-unstyled mb-0">
                  <li>
                      <a
                        href="#!"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        < style={{ marginRight: "5px" }} />
                        More products
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </MDBCol> */}
              </MDBRow>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Bottom;
