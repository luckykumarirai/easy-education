import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

export default function PrivacyPolicy() {
    return (
        <div style={{background: 'linear-gradient(to top, #ffffff 0%, #cc99ff 100%)'}}>
        <h2 style={{fontFamily:'revert', color:'#660066', textAlign:'center', paddingTop:'2%'}}><u>Privacy Policy</u></h2>
            <Container style={{width:'100%', background:"None", textAlign:'left', marginTop:'2%'}}>
                <Row>
                    <Col class="col-12">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5>                  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col class="col-6 col-md-6 col-sm-6">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5>                  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    
                    <Col class="col-6 col-md-12 col-sm-12">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
            </Container>
            
         </div>
    )
}

// export default PrivacyPolicy
