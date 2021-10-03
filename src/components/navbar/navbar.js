import {Navbar,Nav,NavDropdown,Button,DropdownButton,ButtonGroup,Dropdown,SplitButton} from 'react-bootstrap';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import "./navbar.css";

function NavBar(){
  return (
    <>
      <Navbar expand="lg" variant="dark" id="navBar">
        <Navbar.Brand href="/">      
        <img
        src="/images/Project_logo.png"
        width="140"
        height="70"
        className="d-inline-block align-top ml-3"
        alt="Easy Education logo"/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Engineering" id="collasible-nav-dropdown" className="ml-3 mr-3" active>

<NavDropdown title="CSE" id="collasible-nav-dropdown" className="hello ml-3 mr-3" active>
          <div className="CSE-drop-items">
            <NavDropdown.Item className="drop-item" href="#">Data Structures</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Algorithm</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Programming Language</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Core Subjects</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Web Technology</NavDropdown.Item>
            </div>
  </NavDropdown>

            <NavDropdown.Item className="drop-item" href="#">IT</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">EXTC</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">ECE</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="School" id="collasible-nav-dropdown" className="ml-3 mr-3" active>
            <NavDropdown.Item className="drop-item" href="#">IX</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">X</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">XI</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">XII</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Competitive" id="collasible-nav-dropdown" className="ml-3 mr-3" active>
            <NavDropdown.Item className="drop-item" href="#">Quiz</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Bank</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">JEE Main</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">Gate</NavDropdown.Item>
            <NavDropdown.Item className="drop-item" href="#">SSC</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="" href="addconent" active >AddContent</Nav.Link>
          </Nav>

<div className="signup ml-3 mr-3">
    <SplitButton variant="outline-primary"
    menuAlign={{ lg: 'right' }}
      title="Sign Up"
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1" className="sign-up-login" href="/Signup">Student</Dropdown.Item>
      <Dropdown.Item eventKey="2" className="sign-up-login" href="/teacherSignup">Teacher</Dropdown.Item>
    </SplitButton>
  </div>
  <div className="signup ml-3 mr-3">
    <SplitButton variant="outline-success"
      menuAlign={{ lg: 'left' }}
      title="Sign In"
      id="dropdown-menu-align-responsive-2"
    >
      <Dropdown.Item eventKey="1" className="sign-up-login" href="/Signin">student</Dropdown.Item>
      <Dropdown.Item eventKey="2" className="sign-up-login" href="/teacherSignin">Teacher</Dropdown.Item>
    </SplitButton>
  </div>
  <div className="signup ml-3 mr-3">
<Button  variant="outline-primary"  id="dropdown-menu-align-responsive-2" href="#">Logout</Button>
    </div>

          
        </Navbar.Collapse>
      </Navbar>
      </>

);
}
export default NavBar;
