import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faComment,
  faBriefcaseMedical,
  faSurprise,
  faGift,
  faBriefcase,
  faSync,
  faSyncAlt,
  faIcons,
  faWindowRestore,
  faStickyNote,
  faCogs,
  faImage,
  faBacon,
  faTextHeight,
  faFileAlt,
  faMobileAlt,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";

import "../Pages/CSS files/SecondJob.css";
import Button from "react-bootstrap/Button";
import { bold } from "ansi-colors";
const SecondJob = () => {
  return (
    <div id="secondJob" style={{ width: "98%", marginLeft: "1%" }}>
      <div className="container" id="border_Box">
        <div className="row">
          <div className="col-sm-8" id="box_beginning">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 d-flex ">
                  <div className="small_info">
                    <FontAwesomeIcon
                      id="cloud_download"
                      icon={faCloudDownloadAlt}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <h6 id="description">Downloads</h6>
                </div>
                <div className="col-sm-4 d-flex">
                  <FontAwesomeIcon
                    id="cloud_download"
                    icon={faComment}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 id="description">Comments</h6>
                </div>
                <div className="col-sm-4 d-flex ">
                  <FontAwesomeIcon
                    id="cloud_download"
                    icon={faBriefcaseMedical}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 id="description">Premium Support</h6>
                </div>
              </div>
            </div>
            <div className="container" id="icon_col_2">
              <div className="row">
                <div className="col-sm-4 d-flex ">
                  <FontAwesomeIcon
                    id="cloud_download"
                    icon={faGift}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 id="description">Updates</h6>
                </div>
                <div className="col-sm-4 d-flex">
                  <FontAwesomeIcon
                    id="cloud_download"
                    icon={faBriefcase}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 id="description">Release</h6>
                </div>
                <div className="col-sm-4 d-flex">
                  <FontAwesomeIcon
                    id="cloud_download"
                    icon={faSyncAlt}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 id="description">Recent Update</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4" id="box_beginning">
            <div
              className="container d-flex justify-content-center"
              id="innerBox"
            >
              <img
                id="thumbnails"
                src="https://www.creative-tim.com/assets/icon-html-7a445de6be8d1419c86371dddb3b8fb36f25de6e5b084fb777d258062ad1902d.jpg"
              />

              <img
                id="thumbnails"
                src="https://www.creative-tim.com/assets/icon-sass-04530e10f1c5c63f6f9aea7a776d0c5ebf655cc4ae2ecab6d092e68583d1ab64.jpg"
              />

              <img
                id="thumbnails"
                src="https://www.creative-tim.com/assets/icon-photoshop-c4461a673acc7fd79f9302d48cf1653dc130e4234f07478a5272cd4c1642fc07.jpg"
              />

              <img
                id="thumbnails"
                src="https://www.creative-tim.com/assets/icon-bootstrap-5e6858bdd6419348ca6db41514ee984f8c729ba56c322230cf96d310b4bf9bea.jpg"
              />

              <img
                id="thumbnails"
                src="https://www.creative-tim.com/assets/icon-react-5eeeb624004330b240f7417ab81305cf6d1d0ad35a03dafdc487b2bd9cf4a0bc.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row " id="box_beginning">
          <div className="col-sm-12 d-flex justify-content-center">
            <h6 id="item_tagline_page2">
              PREMIUM BOOTSTRAP 4 AND REACTSTRAP UI KIT
            </h6>
          </div>
          <div className="col-sm-12 d-flex justify-content-center">
            <h1 id="productDesc">Product description</h1>
          </div>
          <div className="col-sm-12 d-flex ">
            <div className="container">
              <p className="d-flex justify-content-center" id="contentDesc">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>

              <p id="contentDesc_2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <Button
                className="d-flex justify-content-center"
                variant="light"
                style={{ marginLeft: "44%" }}
              >
                View More
              </Button>
            </div>
          </div>
          {/* <div className="col-sm-12 d-flex "></div>
          <div className="col-sm-12 "></div> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-10" id="catgerios">
            <div className="container ">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faEnvelopeOpen}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Envelope
                    </h5>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faCogs}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Settings
                    </h5>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faImage}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Gallery
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row" id="second_row_icons">
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faBacon}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Themes
                    </h5>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faFileAlt}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Files
                    </h5>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon
                      id="icons"
                      icon={faMobileAlt}
                      style={{ cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "-15%", fontWeight: "100" }}>
                      Mobile
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondJob;
