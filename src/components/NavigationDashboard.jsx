import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Navbar.Brand from "react-bootstrap/NavbarBrand";
import "../pages/landing/landing_css/navigationDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Link, Switch } from "react-router-dom";

import {
  faCalendar,
  faUser,
  faClipboardCheck,
  faDrumstickBite,
  faMapMarkerAlt,
  faNewspaper,
  faBell,
  faSnowboarding,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
import dashboardItem from "../pages/dashboard/DashboardItem1";
import DashboardItem1 from "../pages/dashboard/DashboardItem1";
const NavigationDashboard = () => {
  return (
    <div id="layer">
      <div className="container-fluid" id="white_smoke">
        <h4 className="d-flex justify-content-center">
          <span id="sideBar_heading">Creative Tim</span>
        </h4>
        <hr />

        <Navbar id="nav_bar">
          <Link to="/Dashboard/dashboardItem1" id="nav_bar">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{
                cursor: "pointer",
                color: "#808080"
              }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Dashboard</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/userprofile" id="nav_bar">
            <FontAwesomeIcon
              icon={faUser}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">User Profile</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/tabelList" id="nav_bar">
            <FontAwesomeIcon
              icon={faClipboardCheck}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Table List</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/typograpghy" id="nav_bar">
            <FontAwesomeIcon
              icon={faDrumstickBite}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Typography</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/icons" id="nav_bar">
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Icons</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Navbar.Brand href="#home" id="nav_bar">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Maps</h6>
          </Navbar.Brand>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/notifications" id="nav_bar">
            <FontAwesomeIcon
              icon={faBell}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Notifications</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar" style={{ marginBottom: "30%" }}>
          <Link to="#home" id="nav_bar">
            <FontAwesomeIcon
              icon={faSnowboarding}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">RTL Support</h6>
          </Link>
        </Navbar>
        <Navbar id="nav_bar">
          <Link to="/Dashboard/upgradetopro" id="pro_verson">
            <FontAwesomeIcon
              icon={faChevronCircleUp}
              style={{ cursor: "pointer", color: "#808080" }}
            />
            &nbsp;&nbsp;&nbsp;
            <h6 id="side_bar_headings">Upgrade To Pro</h6>
          </Link>
        </Navbar>
      </div>
    </div>
  );
};
export default NavigationDashboard;
