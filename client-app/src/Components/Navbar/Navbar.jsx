// navigation.jsx
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import React from 'react';
import MegaMenu from './Megamenu';
import temp_logo from '../Assets/temp_logo.png'

function Navigation() {
  return (
    <div className='nav'>
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#"><img src={temp_logo} alt="HomeFlex" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='nav-list'>Home</Nav.Link>
            <NavDropdown title="Properties" id="navbarScrollingDropdown" className='list'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='list'>About</Nav.Link>
            <NavDropdown title="Blog" id="navbarScrollingDropdown" className='list'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown" className='list'>
              <MegaMenu />
            </NavDropdown>
            <Nav.Link href="#" className='list'>Contact</Nav.Link>
          </Nav>
          <Form className='list'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;