import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar
      className="bg-body-tertiary"
      style={{ borderBottom: "1px solid #000", marginRight: "20px" }}
    >
      <Container>
        <Navbar.Brand href="#home">Search</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav style={{ margin: "auto" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#timeline">Shop 371,230 Items</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#editorial">Editorial</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Account</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
