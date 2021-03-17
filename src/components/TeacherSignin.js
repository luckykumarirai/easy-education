import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";




class TeacherSignin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
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
    axios.post('http://localhost:5000/teacher/Signin',{
      email:  this.state.email,
      password: this.state.password
    })
    .then((res) => {
      console.log(res);
     alert(res.data.message);
    
    }).catch((err) => {
      console.log(err);
    })
  };

  render() {
    return (
      <>
        <Card
          style={{
            width: "40vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4vh",
            marginBottom: "4vh",
            backgroundImage: "linear-gradient(to right, white , #74FC3C)"
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#6c6c6c",
              color: "#74FC3C",
              fontFamily: '"Merriweather", serif',
              fontSize: "1.25rem",
            }}
            as="h5"
          >
            Teacher Signin
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => this.submitSignin(e)}>
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
                onChange={(e) => this.userTyping("email", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#74FC3C", color: "#000000" }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicPassword"
                onChange={(e) => this.userTyping("password", e)}
              >
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  style={{ borderColor: "#74FC3C", color: "#000000" }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                style={{ color: "#74FC3C", fontWeight: "bold" }}
                variant="secondary"
                type="submit"
              >
                Signin
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default TeacherSignin;
