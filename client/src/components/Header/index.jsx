import React, { useState } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchText);
    // Do something with searchText
  };
  return (
    <Navbar className='bg-red-500' expand='lg'>
      <Container fluid='lg'>
        <Navbar.Brand className='text-white' href='#'>
          Football Predict
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0 gap-4'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className='text-white' href='#action1'>
              Home
            </Nav.Link>
            <Nav.Link className='text-white' href='#action2'>
              Fixtures & Results
            </Nav.Link>
            <NavDropdown
              title='Standings'
              id='navbarScrollingDropdown'
              className='nav-dropdown-title'
            >
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-white' href='#'>
              Players & Staff
            </Nav.Link>
            <Nav.Link className='text-white' href='#'>
              Predict
            </Nav.Link>
          </Nav>
          <Form className='d-flex' onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <Button
              variant='outline-success'
              type='submit'
              className='text-white'
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
