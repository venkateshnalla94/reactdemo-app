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
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import "../Pages/CSS files/SecondJob.css";
const SecondJob = () => {
  return (
    <div id="secondJob">
      <div className="container" id="border_Box">
        <div className="row">
          <div className="col-sm-8" id="box_beginning">
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
            <div className="row" id="icon_col_2">
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
          <div className="col-md-4" id="box_beginning">
            <div className="row d-flex justify-content-center" id="innerBox">
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
            <div className="row">
              <div className="col">
                <h6 id="item_tagline_page2">
                  PREMIUM BOOTSTRAP 4 AND REACTSTRAP UI KIT
                </h6>
              </div>
              {/* <div className="col">
                <h6 id="item_tagline_page2">Product description</h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondJob;
