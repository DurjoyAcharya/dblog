import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./custom.css";
//import { BrowserRouter as Router, Link,Route} from "react-router-dom";

export default function Navbars() {
  return (
    <Navbar className="gray">
      <Container fluid>
        <Navbar.Brand href="/">Assignment-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="/content">Content</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/goal">Our Goal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.somewhereinblog.net">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search-Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
