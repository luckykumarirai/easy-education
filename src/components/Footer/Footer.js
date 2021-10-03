import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import "./Footer.css";
import React, { Component } from "react";
import axios from 'axios';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      message: null,
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        console.log("email");
        this.setState({ email: e.target.value });
        break;

      case "message":
        this.setState({ message: e.target.value });
        break;

      default:
        break;
    }
  };

  submitContactUsFooter = (e) => {
    e.preventDefault();
    // if (this.state.email !== null && this.state.message !== null) {
    //   alert("Thanks for contacting us, We will get back to you soon!");
    // } else {
    //   alert("Please fill up all the details!");
    // }


    axios.post('http://localhost:5000/user/ContactUsFooterSubmit',{
        email: this.state.email,
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
        <footer className="bg-dark text-white newFooter">
          <ul>
            <li class="listHeading">
              <h5>Easy Education</h5>

              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Easy Education
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  easyeducation@gmail.com
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  IIIT Manipur,795002
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Tutorials
                </Button>{" "}
              </li>
            </li>

            <li class="listHeading">
              <h5>Company</h5>

              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  About Us
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Terms and Condition
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Privacy Policy
                </Button>{" "}
              </li>
              <li class="listFooter">
                {" "}
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Blogs
                </Button>{" "}
              </li>
            </li>

            <li class="listHeading">
              <h5>Learning and practice</h5>

              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Engineering
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Competitive Exams
                </Button>{" "}
              </li>
              <li class="listFooter">
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  Quiz
                </Button>{" "}
              </li>
              <li class="listFooter">
                {" "}
                <Button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#343a40",
                    padding: "2px 0.75rem",
                    fontSize: "0.8rem",
                  }}
                  variant="outline-warning"
                  href="#"
                >
                  School
                </Button>{" "}
              </li>
            </li>

            <li class="listHeading">
              <h5>Contact Us</h5>

              <Form onSubmit={(e) => this.submitContactUsFooter(e)}>
                <Form.Group
                  controlId="formBasicEmail"
                  onChange={(e) => this.userTyping("email", e)}
                >
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicText"
                  onChange={(e) => this.userTyping("message", e)}
                >
                  <Form.Control
                    as="textarea"
                    rows={1}
                    size="sm"
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Button variant="outline-warning" size="sm" type="submit">
                  Submit
                </Button>
              </Form>
            </li>
          </ul>

          <div className="row  mx-auto">
            <div className="col-sm-12 mt-md-2  my-2">
              <a href="#">
                <Icon.Linkedin
                  style={{ color: "#fff" }}
                  className="mx-md-3 mx-2"
                ></Icon.Linkedin>{" "}
              </a>
              <a href="#">
                <Icon.Facebook
                  style={{ color: "#fff" }}
                  className="mx-md-3 mx-2"
                ></Icon.Facebook>
              </a>
              <a href="#">
                <Icon.Twitter
                  style={{ color: "#fff" }}
                  className="mx-md-3 mx-2"
                ></Icon.Twitter>
              </a>
              <a href="#">
                <Icon.Youtube
                  style={{ color: "#fff" }}
                  className="mx-md-3 mx-2"
                ></Icon.Youtube>{" "}
              </a>
              <br />
              <span style={{ fontSize: "8px" }}>
                &copy; 2021 - All right reserved - Easy-Education
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
