import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../Pages/CSS files/Landing_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faListAlt,
  faGift,
  faBlog,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Route, Link, Switch } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import SecondJob from "../Pages/SecondJob";
import LandingFreeDemo from "../../../pages/landing/LandingFreeDemo";

import LandingComment from "../../../pages/landing/LandingComment";
import Footer from "../../../components/Footer";

const First_Page = () => {
  //
  return (
    <div>
      <div className="nav_bar">
        <Navbar expand="lg" variant="light" bg="dark">
          <Container>
            <Link id="navbar_content" href="#">
              CreativeTim
            </Link>
            <Link to="Dashboard" id="navbar_content" href="#">
              <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer" }} />
            </Link>
            <Link to="Dashboard" id="navbar_content" href="#">
              <FontAwesomeIcon icon={faListAlt} style={{ cursor: "pointer" }} />
            </Link>

            <Link id="navbar_content" to="Dashboard">
              <FontAwesomeIcon
                icon={faGift}
                style={{ cursor: "pointer" }}
                to="/NavigationDashboard"
              />
            </Link>

            <Link to="Dashboard" id="navbar_content" href="#">
              <FontAwesomeIcon icon={faBlog} style={{ cursor: "pointer" }} />
            </Link>
          </Container>
        </Navbar>
      </div>

      <div className="row">
        <div id="grad1" style={{ width: "100%", height: "100%" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src="https://s3.amazonaws.com/creativetim_bucket/products/171/original/opt_nukp_react_thumbnail.jpg?1564486765" />
              </div>
              <div className="col-sm-6" id="desc">
                <h1 id="item">Now UI Kit PRO React</h1>
                <h6 className="tagline" id="item_tagline">
                  Premium Bootstrap 4 And Reactstrap Ui Kit
                </h6>
                <p className="text-center">
                  License&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <hr className="line_break" />
                <ButtonToolbar id="toolBar" style={{ padding: "5%" }}>
                  <Button
                    variant="light"
                    id="primary_button"
                    style={{ marginBottom: "5%" }}
                  >
                    ADD TO CART . $79
                  </Button>
                  <Button
                    id="secondary_button"
                    variant="outline-light"
                    style={{ marginBottom: "5%" }}
                  >
                    Live Preview
                  </Button>
                  <Button
                    id="ternary_button"
                    variant="secondary"
                    style={{ marginBottom: "5%" }}
                  >
                    Docs
                  </Button>
                </ButtonToolbar>
              </div>
            </div>
          </div>
          <div id="secondComponent">
            <SecondJob />
          </div>

          {/* <LandingFreeDemo />
          <LandingComment /> */}
        </div>
      </div>
      <div className="row">
        <LandingFreeDemo />
      </div>
      <div className="row">
        <LandingComment />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};
export default First_Page;
