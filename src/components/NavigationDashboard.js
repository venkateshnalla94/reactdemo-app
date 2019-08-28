import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Navbar.Brand from "react-bootstrap/NavbarBrand";
import "../pages/landing/landing_css/navigationDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faTable,
  faClipboardCheck,
  faDrumstickBite,
  faMapMarkerAlt,
  faNewspaper,
  faBell,
  faSnowboarding,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
const NavigationDashboard = () => {
  return (
    <div>
      <div className="col-sm-2" id="layer">
        <div className="container-fluid" id="white_smoke">
          <h4 className="d-flex justify-content-center">
            <span id="sideBar_heading">Creative Tim</span>
          </h4>
          <hr />

          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar" block>
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Dashboard</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">User Profile</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon
                icon={faClipboardCheck}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Table List</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon
                icon={faDrumstickBite}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Typography</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Icons</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Maps</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon icon={faBell} style={{ cursor: "pointer" }} />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Notifications</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              <FontAwesomeIcon
                icon={faSnowboarding}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">RTL Support</h6>
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="pro_verson">
              <FontAwesomeIcon
                icon={faChevronCircleUp}
                style={{ cursor: "pointer" }}
              />
              &nbsp;&nbsp;&nbsp;
              <h6 id="side_bar_headings">Upgrade To Pro</h6>
            </Navbar.Brand>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default NavigationDashboard;
