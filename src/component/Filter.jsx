import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Star from "./Star";

const Filter = ({ search, sear, starrate, handlerating }) => {
  return (
    <div style={{ top: 0, position: "fixed", width: "100%", zIndex: "1000" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">FILM MOVIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={sear}
              />
            </Form>
            <Star rate={starrate} handlerating={handlerating} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Filter;
