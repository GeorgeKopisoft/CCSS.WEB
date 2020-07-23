import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import CustomNavlink from '../micro/CustomNavLink';

const NavigateBar = (props) => {
    return (
        <Navbar bg="darkgray" 
            variant="dark" 
            expand="lg"
            className="shadow py-3"
            >
            <Navbar.Brand href="/" className="py-0">
                <img
                    src={logo}
                    className="d-inline-block align-top app-logo w-25"
                    alt="logo"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="">

                    <CustomNavlink url="/"
                        activeClass="text-action"
                    >HOME</CustomNavlink>

                    <NavDropdown title="FAKE DROPDOWN" id="nav-dropdown" className="text-center transition-all">

                        <CustomNavlink url="/fake/1"
                            activeClass="text-action"
                        >FAKE 1</CustomNavlink>

                        <NavDropdown.Divider />

                        <CustomNavlink url="/fake/2"
                            activeClass="text-action"
                        >FAKE 2</CustomNavlink>

                        <CustomNavlink url="/fake/3"
                            activeClass="text-action"
                        >FAKE 3</CustomNavlink>

                    </NavDropdown>

                    <CustomNavlink url="/fake-link"
                        activeClass="text-action"
                    >OTHER</CustomNavlink>

                    <CustomNavlink url="/crud"
                        activeClass="text-action"
                    >CRUD</CustomNavlink>

                    <CustomNavlink url="/fake"
                        activeClass="text-action"
                    >FAKE</CustomNavlink>

                    <CustomNavlink url="/help"
                        activeClass="text-action"
                    >HELP</CustomNavlink>

                    <CustomNavlink url="/login"
                        activeClass="text-action"
                    >LOGIN</CustomNavlink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigateBar;
