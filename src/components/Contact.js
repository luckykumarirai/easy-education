import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./contactus.css";
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
          first_name: null,
          last_name: null,
          email: null,
          message: null,
          contact: null
        };
      }


      userTyping = (type, e) => {
        switch (type) {
          case "email":
            console.log('email');
            this.setState({ email: e.target.value });
            break;
          case "first_name":
            this.setState({ first_name: e.target.value });
            break;
    
          case "last_name":
            this.setState({ last_name: e.target.value });
            break;
          case "contact":
                this.setState({ contact: e.target.value });
                break;
          case "message":
                this.setState({ message: e.target.value });
                break;
          default:
            break;
        }
      };

      submitContactUs = (e) => {
        e.preventDefault();
  
      axios.post('http://localhost:5000/user/ContactUsSubmit',{
        first_name:  this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        contact: this.state.contact,
        message: this.state.message
      })
      .then((res) => {
        console.log(res.data);
        alert("Message submitted successfully!")
      
      }).catch((err) => {
        alert(err);
        console.log(err);
      })
      
    };

  render() {
    return (
      <>
        <div class="contact"></div>
        <div class="pattern">
          <h2 style={{ color: "orange", marginTop: "5%" }}>
            Have Some Questions?
          </h2>
          <br />
          <Card
            style={{
              color: "black",
              width: "38%",
              marginLeft: "30%",
              borderRadius: "0",
              paddingBottom: "20px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "orange" }}>Contact us</Card.Title>
              <Form onSubmit={(e) => this.submitContactUs(e)}>
                <Container>
                  <Row>
                    <Col class="col-lg-6">
                        <Form.Group onChange={(e) => this.userTyping('first_name',e)}>
                        <Form.Control
                        placeholder="First Name"
                        style={{ borderRadius: "0" }}
                      ></Form.Control>

                        </Form.Group>
                      
                    </Col>
                    <Col class="col-lg-6">
                        <Form.Group onChange={(e) => this.userTyping('last_name',e)}>
                      <Form.Control
                        placeholder="Last Name"
                        style={{ borderRadius: "0" }}
                      ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col class="col-lg-6">
                        <Form.Group onChange={(e) => this.userTyping('contact',e)}>
                      <Form.Control
                        placeholder="Phone"
                        style={{ borderRadius: "0" }}
                      ></Form.Control></Form.Group>
                    </Col>
                    <Col class="col-lg-6">
                        <Form.Group onChange={(e) => this.userTyping('email',e)}>
                      <Form.Control
                        placeholder="Email"
                        style={{ borderRadius: "0" }}
                      ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Form.Group onChange={(e) => this.userTyping('message',e)}>
                  <Form.Control
                    type="textarea"
                    placeholder="Message"
                    style={{ height: "100px" }}
                  ></Form.Control></Form.Group>
                  <br />
                  <Button
                    style={{
                      backgroundColor: "orange",
                      border: "none",
                      borderRadius: "0",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export { Contact };
