import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Navbar.Brand from "react-bootstrap/NavbarBrand";
import "../pages/landing/landing_css/navigationDashboard.css";
const NavigationDashboard = () => {
  return (
    <div>
      <div className="col-sm-2" id="layer">
        <div>
          <h4 className="d-flex justify-content-center">
            <span id="sideBar_heading">Creative Tim</span>
          </h4>
          <hr />

          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar" block>
              Dashboard
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              User Profile
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              Table List
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              Typography
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              Icons
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              Maps
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              Notifications
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="nav_bar">
              RTL Support
            </Navbar.Brand>
          </Navbar>
          <Navbar id="nav_bar">
            <Navbar.Brand href="#home" id="pro_verson">
              Upgrade To Pro
            </Navbar.Brand>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default NavigationDashboard;
