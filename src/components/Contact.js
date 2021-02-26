import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Form} from "react-bootstrap";
import "./contactus.css";
const Contact = () =>  {
    return (
        <>
            <div class="contact"></div>
            <div class="pattern">
            <h2 style={{color:'orange', marginTop:'5%'}}>Have Some Questions?</h2>  
            <br/>
                <Card style={{color:'black', width:'38%', marginLeft:'30%', borderRadius:'0', paddingBottom:'20px'}}>
                    <Card.Body>
                        <Card.Title style={{color:"orange"}}>Contact us</Card.Title>
                        <Form>
                            <Container>
                                <Row><Col class="col-lg-6">
                                    <Form.Control placeholder="First Name" style={{borderRadius:'0'}}></Form.Control>
                                </Col>
                                <Col class="col-lg-6">
                                    <Form.Control placeholder="Last Name" style={{borderRadius:'0'}}></Form.Control>
                                </Col>
                                </Row>
                                <br/>
                                <Row><Col class="col-lg-6">
                                    <Form.Control placeholder="Phone" style={{borderRadius:'0'}}></Form.Control>
                                </Col>
                                <Col class="col-lg-6">
                                    <Form.Control placeholder="Email" style={{borderRadius:'0'}}></Form.Control>
                                </Col>
                                </Row>
                                <br/>
                                <Form.Control type="textarea" placeholder="Message" style={{height:"100px"}}></Form.Control>
                                <br/>
                                <Button style={{backgroundColor:'orange', border:'none', borderRadius:'0'}}>Submit</Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            
        </>
    )
}

export {Contact}
