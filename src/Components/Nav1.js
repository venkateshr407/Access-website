import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
.navbar{
  color: white;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.navbar-brand, .navbar-nav .nav-link {
  color: white;
  font-weight:bold;
  font-size:20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  border: white;
}


  &:hover{
    color:black;
  }
}
`;

 const Nav1 = () =>(
  <Styles>
    <Navbar  expand="lg">
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

