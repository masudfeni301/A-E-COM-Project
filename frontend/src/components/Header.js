import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav, Navbar} from "react-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                     <Navbar.Brand href="/">A-E-Com</Navbar.Brand>
                    </LinkContainer>                    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/cart">
                    <Nav.Link><i className="fas fa-shopping-cart mr-2"></i>Cart</Nav.Link> 
                    </LinkContainer>
                   <LinkContainer to="/login">
                    <Nav.Link><i className="fas fa-user mr-2"></i>Sign in</Nav.Link>      
                   </LinkContainer>
                </Nav>    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
