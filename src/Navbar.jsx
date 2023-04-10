import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      > */}
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Curtain poles" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Curtain Accessories
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Curtain hangers
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Rod screws</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="#link">Accessories</Nav.Link>
          <Nav.Link href="#link">curtain tracks</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for curtain poles"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
      {/* </div> */}
    </Navbar>
  );
}

export default Navbar1;
