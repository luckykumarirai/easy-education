import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Card, Container, Row, Col, Button} from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <>
      <div class="home">
        <div class="col d-flex justify-content-center">
          <Card
            style={{
              width: "75vh",
              marginTop: "6%",
              opacity: "0.8",
              background: "black",
              color: "white",
            }}
          >
            <Card.Body>
              <Card.Text>
                <h2>Easy Education</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="info">Get Started</Button>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            background: "black",
            padding: "30px 0 80px 0",
            marginTop: "8%",
          }}
        >
          <Container>
            <Row>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/desktop.png"></img>
                <h4>Lorem ipsum</h4>
                <p>
                  loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,
                </p>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/inspiration.png"></img>
                <h4>Lorem ipsum</h4>
                <p>
                  loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,
                </p>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/puzzle.png"></img>
                <h4>Lorem ipsum</h4>
                <p>
                  loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,
                </p>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/studying.png"></img>
                <h4>Lorem ipsum</h4>
                <p>
                  loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Home };
