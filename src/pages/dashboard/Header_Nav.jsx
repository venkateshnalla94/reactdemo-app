import React from "react";
import "../dashboard/Dashboard_css/item1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSatelliteDish,
  faBell,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const Header_Nav = props => {
  return (
    <div className="row" id="top_heading">
      <Navbar expand="lg" variant="light" bg="dark" style={{ width: "100%" }}>
        <Container>
          <Navbar.Brand id="navbar_content" href="#">
            <h4
              style={{ fontSize: "1.5rem", fontWeight: "100", width: "122px" }}
            >
              {props.name}
            </h4>
          </Navbar.Brand>
          <Navbar.Brand id="navbar_content" href="#">
            <input className="searchField" type="text" placeholder="Search" />
          </Navbar.Brand>
          <Navbar.Brand id="navbar_content" href="#">
            <FontAwesomeIcon
              id="fontAwesomSearch"
              icon={faSearch}
              style={{
                cursor: "pointer"
                // width: "36%",
                // marginBottom: "20%"
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand id="navbar_content" href="#">
            <FontAwesomeIcon
              id="fontAwesomSearch"
              icon={faSatelliteDish}
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
          <Navbar.Brand id="navbar_content" href="#">
            <FontAwesomeIcon
              id="fontAwesomSearch"
              icon={faBell}
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
          <Navbar.Brand id="navbar_content" href="#">
            <FontAwesomeIcon
              id="fontAwesomSearch"
              icon={faUser}
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header_Nav;
