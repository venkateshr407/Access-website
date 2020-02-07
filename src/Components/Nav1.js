import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
.navbar{
  background-color: #3f51b5;
}
.navbar-brand, .navbar-nav .nav-link{
  color: #3f51b5;
  font-weight:bold;
  font-size:30px;
  font-family: "Google Sans", "Roboto", Arial, Helvetica, sans-serif;
  &:hover{
    color:black;
  }
}
`;

 const Nav1 = () =>(
  <Styles>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"> Access</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="#about">About us</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#team">Team</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
</Styles>

)
export default Nav1;

