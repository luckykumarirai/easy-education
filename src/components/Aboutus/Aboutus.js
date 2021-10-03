import React from 'react'
import "./Aboutus.css";
import Footer from "../Footer/Footer";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

export default function Aboutus() {
    return (
        <div className="about">
            <CardDeck>
                <Card className=" aboutuscard border-0 mt-5">
                    <Card.Img variant="top" />
                    <Card.Body className="topcard">
                        <Card.Title className="heading text-center"><h1>Why us ?</h1></Card.Title>
                        <Card.Text className="text text-left">
                            lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="aboutuscard border-0 mt-5">
                    <Card.Body>
                        <Card.Text className="d-flex justify-content-center">
                            <img className="image" src="why-us.png"/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card className="aboutuscard bottom border-0">
                    <Card.Body>
                        <Card.Text className="d-flex justify-content-center">
                            <img className="mission" src="mission.png"/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="aboutuscard bottom border-0">
                    <Card.Img variant="top" />
                    <Card.Body className=" bottomcard topcard">
                        <Card.Title className="heading text-center"><h1>Our Mission..</h1></Card.Title>
                        <Card.Text className="text text-left">
                            lorem Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laborisminim veniam, quis nostrud exercitat
                            voluptate velit esse cillum dolore e
                            deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Footer />
        </div>
    )
}