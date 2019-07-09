import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Button, Form, FormGroup, FormControl, ControlLabel, Container, Row, Navbar} from "react-bootstrap";
import nav_logo from '../assets/light-bulb.svg';

function NavbarGlobal() {
    const linkStyle = {
        color: 'white'
    };

    const auth = useSelector(state => state.auth)

    return (
    <nav className="nav-bar">
        <img src={nav_logo} width="63" height="67" alt="DMP logo"/>
            <Navbar.Brand href="/home"> <b>AMOR FATI</b> </Navbar.Brand>
        <ul className='nav-links'>
            <li>Logged: {auth.isAuthenticated.toString()}</li>
            <Link style={linkStyle} to='/dashboard'>
                <li>Dashboard</li>
            </Link>
            <Link style={linkStyle} to='/events/instant'>
                <li>Instant Events</li>
            </Link>
        </ul>
    </nav>
    );
}

export default NavbarGlobal;