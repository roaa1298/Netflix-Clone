import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';

function NavBar() {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand to="/trending">Movies</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link className='link' to="/trending">Home</Link>
                            <Link className='link' to="/favorite">Favorite</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </>
    );
}
export default NavBar;