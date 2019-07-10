import React from 'react';
import {Redirect} from 'react-router-dom';
import '../App.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Button, Form, FormGroup, FormControl, ControlLabel, Container, Row, Navbar} from "react-bootstrap";
import nav_logo from '../assets/light-bulb.svg';
import { useDispatch } from 'react-redux'
import { deleteCurrentUser } from '../actions/auth';

function NavbarGlobal() {
    const linkStyle = {
        color: 'white'
    };

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const logout = () => {
        //e.preventDefault();
        //setAuthTokenToRequestHeader(false);
        dispatch(deleteCurrentUser());
      }

    return (
        <nav className="nav-bar">
            <img src={nav_logo} width="63" height="67" alt="DMP logo"/>
            <Navbar.Brand> 
                <Link style={linkStyle} to='/dashboard'>
                    <b>AMOR FATI</b> 
                </Link>
            </Navbar.Brand>
            <ul className='nav-links'>
                <li>Logged: {auth.isAuthenticated.toString()}</li>
                <Link style={linkStyle} to='/dashboard'>
                    <li>Dashboard</li>
                </Link>
                <Link style={linkStyle} to='/events/instant'>
                    <li>Instant Events</li>
                </Link>

                <Link style={linkStyle} onClick={logout} to='/login'>
                    <li>Logout</li>
                </Link>
            </ul>
        </nav>
        );
}

export default NavbarGlobal;