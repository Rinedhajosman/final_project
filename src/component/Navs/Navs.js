import React from "react";
import './Navs.css'
import logo from './../../imgs/logo.png'
import { Navbar, Nav, Container } from "react-bootstrap";

function Navs() {
return (
<Navbar expand="lg">
    <Container>
    <Navbar.Brand href="#home">
        <img src={logo} title="logo" alt='logo'></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto left">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#link">Menü</Nav.Link>
            <Nav.Link href="#link">Hakkımızda</Nav.Link>
            <Nav.Link href="#link">İletişim</Nav.Link>
        </Nav>
        <Nav>
           <Nav.Link id="number">0536 845 ** **</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default Navs;
