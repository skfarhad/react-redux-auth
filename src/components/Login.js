import  React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel, Container, Row, Navbar, Nav} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/auth';
import isEmpty from '../utils/isEmpty';

const config = require("../config.json");

const baseUrl =  `${config["BASE_API_URL"]}`



export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.changeHandler=this.changeHandler.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    changeHandler = e => {
        //console.log("sifdhsifighigr")
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {...prevstate};
            newState[name] = value;
            return newState;
        })
    }

    loginHandler = async (e) => {
        e.preventDefault();
    
        const {username, password} = this.state;
    
        if(!isEmpty(username) && !isEmpty(password)) {
          try {
            //const  data = await loginWithPassword(username, password);
            const res = await axios.post(`${baseUrl}user/login/password/`, {
                username,
                password
              });

            console.log(res.data)
            // dispatching the action
            this.props.setCurrentUser(res.data);

            
          }catch(error) {
              console.log(error);
            if (error.response.status === 400) {
              this.setState({error: error.response.data.msg});
            }
          }
  
        }else {
          this.setState({error: "Phone and password must be fill"});
        }
      }

    render() {
        return (
            <div style={{background:'#F8FAFE'}}>

            <div className="bg-white shadow-lg rounded col-md-3 p-4 m-5 mx-auto">
                <Form onSubmit={e => this.loginHandler(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username
                        </Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    </Form.Group>
                   <Button variant="primary btn-block" type="submit">
                       {this.state.token && <Redirect to ={{pathname:'/home', state:
                               {key:this.state.token, currentuser:this.state.currentUser} }}> </Redirect> }
                       Login
                  </Button>
                </Form>
            </div>
            </div>

        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (userInfo) => dispatch(setCurrentUser(userInfo)),
})
  
  
const mapStateToProps = state => ({
    post: state.auth.contacts
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default withRouter(Login);