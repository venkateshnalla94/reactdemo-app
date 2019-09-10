import React from "react";
import Button from "react-bootstrap/Button";
import "../pages/landing/landing_css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faSatelliteDish,
  faBaseballBall,
  faCertificate,
  faRetweet,
  faWineGlassAlt,
  faMapPin
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div id="footerComponent" style={{ width: "100%" }}>
      <div className="container">
        <div className="row d-flex justify-content-center" id="subscribeBox">
          {/* Subscribe Box */}
          <div className=" col-sm-12 " id="figures_content">
            <div className="container" id="section_num">
              <div className="row">
                <div className="col-sm-2">
                  <h4 id="figures">
                    <b>855,872</b>
                    <p>Accounts</p>
                  </h4>
                </div>
                <div className="col-sm-2">
                  <h4 id="figures">
                    <b>1,544,467</b>
                    <p>Downloads</p>
                  </h4>
                </div>
                <div className="col-sm-2">
                  <h4 id="figures">
                    <b>118</b>
                    <p>Products</p>
                  </h4>
                </div>

                <div className="col-sm-3">
                  <h6 id="subEmail">Join our newsletter</h6>
                  <input
                    id="emailBox"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-sm-3" id="figures">
                  <Button id="join" block>
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Resources Block */}

          <div className="container" id="figures_content">
            <div className="row">
              <div className="col-sm-2">
                <h6>Company</h6>
                <ul id="listItems">
                  <li id="nav">Home</li>
                  <li id="nav">Frrebies</li>
                  <li id="nav">Premium</li>
                  <li id="nav">Blog</li>
                  <li id="nav">Afflitate Program</li>
                  <li id="nav">Get Coupon</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h6>Help and Support</h6>
                <ul id="listItems">
                  <li id="nav">FAQ</li>
                  <li id="nav">Contact Us</li>
                  <li id="nav">Premium Support</li>
                  <li id="nav">Sponorships</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h6>Legal</h6>
                <ul id="listItems">
                  <li id="nav">Terms and Conditions</li>
                  <li id="nav">Privacy Policy</li>
                  <li id="nav">Licenses</li>
                  <li id="nav">Personal License</li>
                  <li id="nav">Developer License</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h6>Resources</h6>
                <ul id="listItems">
                  <li id="nav">Bootstrap Cheat Sheet</li>
                  <li id="nav">Third Party Tools</li>
                  <li id="nav">illustrators</li>
                  <li id="nav">Blue Host</li>
                  <li id="nav">Made with Creative Tim</li>
                </ul>
              </div>
              <div className="col-sm-3" id="img_placeholder">
                <img src="http://lorempixel.com/400/200" />
                <img src="http://lorempixel.com/400/200/sports" />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "grey", borderTop: "2px solid white" }} />
        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: "15%" }}
        >
          <FontAwesomeIcon
            id="footer_icons1"
            icon={faSatelliteDish}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            id="footer_icons1"
            icon={faBaseballBall}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            id="footer_icons1"
            icon={faCertificate}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            id="footer_icons1"
            icon={faRetweet}
            style={{ cursor: "pointer" }}
          />
          {/* <FontAwesomeIcon
            id="footer_icons"
            icon={faWineGlassAlt}
            style={{ cursor: "pointer" }}
          /> */}
          {/* <FontAwesomeIcon
            id="footer_icons1"
            icon={faMapPin}
            style={{ cursor: "pointer" }}
          /> */}
        </div>
        <p
          className="d-flex justify-content-center"
          style={{ marginTop: "5%" }}
        >
          {" "}
          &copy; 2019 Creative Tim, all rights reserved. Made with for a better
          web.
        </p>
      </div>
    </div>
  );
};
export default Footer;
