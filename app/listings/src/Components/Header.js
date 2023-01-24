import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BrowserRouter as Router,
  Routes,
  Route /* , Link */,
} from "react-router-dom";

import Home from "../Pages/home";
/* import Features from "../Pages/features"; */
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Accordion from "./Accordion/Accordion";
import AccordionWeather from "./Accordion/AccordionWeather";
import AccordionPres from "./Accordion/AccordionPres";
import AccordionSoon from "./Accordion/AccordionSoon";
/* import Favicon from "../favicon_io/favicon-32x32.png"  */

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container fluid style={{ marginLeft: "24px", marginRight: "25px" }}>
            <Navbar.Brand href="#home" id="brend">
              <span>
                <img
                  src="/favicon_io/favicon-32x32.png"
                  alt="brend"
                  style={{ displey: "flex", justify: "start" }}
                ></img>
              </span>
              <span
                style={{
                  fontSize: "20px",
                  padding: "15px",
                  marginRight: " 20px",
                }}
              >
                Play with me
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {/* <Nav.Link href="/features">Features</Nav.Link> */}
                <NavDropdown title="Guess" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Accordion">Subject</NavDropdown.Item>
                  <NavDropdown.Item href="/AccordionWeather">
                    Weather
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AccordionPres">
                    President
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AccordionSoon">
                    Soon there will be... more
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link eventKey={2} href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            {/*   <Route path="/features" element={<Features />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Accordion" element={<Accordion />} />
            <Route path="/AccordionWeather" element={<AccordionWeather />} />
            <Route path="/AccordionPres" element={<AccordionPres />} />
            <Route path="/AccordionSoon" element={<AccordionSoon />} />
          </Routes>
        </Router>
      </>
    );
  }
}
