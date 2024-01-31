import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {  Link  } from 'react-router-dom';

const MainMenu = () => {
    return (

        <Nav variant="tabs" defaultActiveKey="/login">
                <Nav.Item>
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/register">
                        Register
                    </Nav.Link>
                </Nav.Item>
            </Nav>


    )
}

export default MainMenu