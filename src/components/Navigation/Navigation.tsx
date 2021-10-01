import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export const Navigation =()=> {
    return (
        <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Mike's Bike Stuff</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#">The Goods</a>
                    <a href="#">Contact</a>
                </Navbar.Text>
                <Button variant="primary">Add Items</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}