import  React, { useState, useCallback } from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel, Container, Row, Navbar, Nav} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../actions/auth';
import isEmpty from '../utils/isEmpty';
import useInput from '../utils/formHandlers';

const config = require("../config.json");

const baseUrl =  `${config["BASE_API_URL"]}`



function Login () {
    const {field: username, bind: bindUsername} = useInput('root_admin');
    const {field: password, bind: bindPassword} = useInput('');
    const [jwtToken, setJwtToken] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    const dispatch = useDispatch()

    const validateForm = () => {
        return !isEmpty(username) && !isEmpty(password);
    }

    const loginHandler = async (e) => {
        e.preventDefault();
    
        if(validateForm()) {
            try {
                //const  data = await loginWithPassword(username, password);
                const res = await axios.post(`${baseUrl}user/login/password/`, {
                    username,
                    password
                    });

                console.log(res.data)
                // dispatching the action
                setJwtToken(res.data.jwt_token);
                dispatch(setCurrentUser(res.data));

            }catch(error) {
                console.log(error);
                setErrMsg(error.response.data.detail);
            }
  
        }else {
            setErrMsg('Provide user and Password');
        }
    }

    return (
        <div style={{background:'#F8FAFE'}}>

        <div className="bg-white shadow-lg rounded col-md-3 p-4 m-5 mx-auto">
            <Form onSubmit={loginHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="Username" {...bindUsername}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl type="password" name="Password" {...bindPassword}/>
                </Form.Group>
                <Button variant="primary btn-block" type="submit">{
                        jwtToken && <Redirect to ={
                            {pathname:'/dashboard', }
                        }> </Redirect> 
                    }
                    Login
                </Button>
                <p>{errMsg}</p>
            </Form>
        </div>
        </div>

    );
}
  
export default Login;