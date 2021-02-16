import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./Footer.css";
function Footer() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-language {
        background-color: transparent;
        color: white;
        font-size:12px;
      }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
      <footer className="bg-dark text-white custom-footer text-center">
        <Navbar.Brand
          href="#home"
          className="navlink"
          style={{ color: "orange" }}
        >
          Easy education
        </Navbar.Brand>
        <ul>
          <li>
            <a href="#">Terms of Service</a>{" "}
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
        <div className="row  mx-auto">
          <div className="col-sm-4 mt-md-3 my-2 ">
            <Dropdown>
              <DropdownButton variant="language" title="LN">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Another Language
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </div>
          <div className="col-sm-4 mt-md-3  my-2">
            <a href="#">
              <Icon.Facebook className="mx-md-3 mx-2"></Icon.Facebook>
            </a>
            <a href="#">
              <Icon.Twitter className="mx-md-3 mx-2"></Icon.Twitter>
            </a>
            <a href="#">
              <Icon.Youtube className="mx-md-3 mx-2"></Icon.Youtube>{" "}
            </a>
          </div>
          <div className="col-sm-4 mt-md-3 my-2 copyright">
            &copy; 2021 - All right reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
