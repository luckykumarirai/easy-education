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
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: null,
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

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      default:
        break;
    }
  };

  formIsValid = () => {
    return this.state.password === this.state.passwordConfirmation;
  };

  submitSignup = (e) => {
      e.preventDefault();
      if(!this.formIsValid()){
        this.setState({signupError: 'Passwords do not match'});
        return;
    }

    alert('Thanks '+this.state.email+ ' for registering with us!');
    console.log("form is submitting.................");
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
            Signup
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => this.submitSignup(e)}>
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
                onChange={(e) => this.userTyping('email',e)}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping('password',e)}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                style={{ textAlign: "left", marginBottom:'8px' }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping('passwordConfirmation',e)}
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="text" placeholder="Re-enter Password" />
              </Form.Group>
                <Form.Group style={{textAlign: 'left',fontSize:'12px'}}>
                <Link to="/Signin"><a>Already have an account? Sign in</a></Link>
                </Form.Group>
              

              {
                    this.state.signupError ? 
                    <Form.Text style={{paddingBottom: '5px'}} className="text-danger">
                    {this.state.signupError}
                  </Form.Text>
                    :
                    null
                }
              <Button variant="secondary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Footer />
      </>
    );
  }
}
export default Signup;
