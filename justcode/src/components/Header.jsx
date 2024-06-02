import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap';
import '../index.css';

function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="_container">
            <Navbar expand="lg" className="bg-body-tertiary navbar" style={{ borderBottom: '1px solid black', width: '100%' }}>
                <Container>
                    <Navbar.Brand href="/"><h1>AirDNL</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 500 }}>
                        <Nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Nav.Link style={{ whiteSpace: 'nowrap' }} href={'/'}>Главная</Nav.Link>
                            <Nav.Link style={{ whiteSpace: 'nowrap' }} href={'/about'}>О нас</Nav.Link>
                            <Nav.Link style={{ whiteSpace: 'nowrap' }} href={'/guides'}>Гиды</Nav.Link>
                            <Nav.Link style={{ whiteSpace: 'nowrap' }} href={'/hotels'}>Отели</Nav.Link>
                            <Nav.Link style={{ whiteSpace: 'nowrap' }} href={'/form'}>Узнать подробнее</Nav.Link>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                style={{ width: '200px', marginLeft: '16px' }}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
