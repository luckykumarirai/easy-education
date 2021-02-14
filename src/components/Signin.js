import React, { Component } from "react";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

import Header from './header';


// The Header component is little different from the navbar component, it does not have signin & signup button as user will on
// either of the two pages so do not need to have those buttons.
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      SigninError: null,
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        console.log('email');
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      default:
        break;
    }
  };

  submitSignin = (e) => {
      e.preventDefault();

    alert('Welcome '+this.state.email);
  };

  render() {
    return (
      <>
          <Header />
                  <Card style={{ width: "30%", marginLeft: "auto", marginRight: "auto", marginTop:'40px'}}>
          <Card.Header
            style={{
              backgroundColor: "#6c6c6c",
              color: "orange",
              fontFamily: '"Merriweather", serif',
              fontSize: "1.25rem",
            }}
            as="h5"
          >
            Signin
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => this.submitSignin(e)}>
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
                onChange={(e) => this.userTyping('email',e)}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control value={this.state.email} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping('password',e)}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control value={this.state.password} type="password" placeholder="Password" />
              </Form.Group>

                <Form.Group style={{textAlign: 'left',fontSize:'12px'}}>
                <Link to="/Signup"><a>Don't have an account? Signup</a></Link>
                </Form.Group>
              

              {
                    this.state.SigninError ? 
                    <Form.Text style={{paddingBottom: '5px'}} className="text-danger">
                    {this.state.SigninError}
                  </Form.Text>
                    :
                    null
                }
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Footer />
      </>
    );
  }
}
export default Signin;
