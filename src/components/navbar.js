import {Navbar,Nav,NavDropdown,FormControl,Button,Form,InputGroup} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';


function NavBar(){
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="navlink" style={{color:'orange'}}>Easy eduction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown  className="navlink" title="Tutorials" id="collasible-nav-dropdown" active>
            <NavDropdown.Item className="textstyle" href="#action/3.1">Alorithms</NavDropdown.Item>
            <NavDropdown.Item className="textstyle" href="#action/3.2">Data Structure</NavDropdown.Item>
            <NavDropdown.Item className="textstyle" href="#action/3.3">Web Technologies</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="textstyle" href="#action/3.4">Gate</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="navlink" href="#about" active >About Us</Nav.Link>
          <Nav.Link className="navlink" href="#contact" active >Contact Us</Nav.Link>
          </Nav>
          <Form inline>
          <InputGroup>
            <FormControl placeholder="Search..." aria-label="Username"  aria-describedby="search"/>
            <InputGroup.Prepend>
                <InputGroup.Text type="submit" id="search" style={{borderTopRightRadius:'3px',borderBottomRightRadius:'3px'}}><Icon.Search/></InputGroup.Text>
            </InputGroup.Prepend>
            </InputGroup>
          </Form>
          <Nav>
            <Nav.Link  href="#signin" active ><Button variant="success"><Icon.BoxArrowInRight/> Sign In</Button></Nav.Link>
            <Nav.Link  href="#signup" active ><Button variant="warning"><Icon.PersonPlus/> Sign Up</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>

);
}
export default NavBar;
