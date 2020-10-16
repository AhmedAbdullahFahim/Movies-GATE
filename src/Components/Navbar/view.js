import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
import './style.css'

function Header(props) {
    return (
        <Navbar className="navigate" expand="lg">
            <Navbar.Brand href="#home">
                <span className="brand1">Movies</span>
                <span className="brand2">GATE</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="collapseIcon">
                <AiOutlineMenu />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=> props.filter('all')} className="browse">All</Nav.Link>
                    <Nav.Link onClick={()=> props.filter('action')} className="browse">Action</Nav.Link>
                    <Nav.Link onClick={()=> props.filter('adventure')} className="browse">Adventure</Nav.Link>
                    <Nav.Link onClick={()=> props.filter('drama')} className="browse">Drama</Nav.Link>
                    <Nav.Link onClick={()=> props.filter('comedy')} className="browse">Comedy</Nav.Link>
                    <Nav.Link onClick={()=> props.filter('scifi')} className="browse">Sci-Fi</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header