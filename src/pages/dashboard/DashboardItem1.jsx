import React from "react";
import "../dashboard/Dashboard_css/item1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSatelliteDish,
  faBell,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Space from "./Space";
import Charts from "./Charts";
import Tables from "./Tables";
import Header_Nav from "./Header_Nav";

const DashboardItem1 = () => {
  return (
    <div>
      <Header_Nav name="Dashboard"></Header_Nav>
      <div className="row">
        <div className="col-sm-4" style={{ marginTop: "5%" }}>
          <Space
            color="rgba(255, 165, 0, 0.55)"
            name="Used Space"
            img="http://lorempixel.com/output/sports-q-c-640-480-7.jpg"
            note="49/50 GB"
          ></Space>
        </div>
        <div className="col-sm-4" style={{ marginTop: "5%" }}>
          <Space
            color="#7b447bcc"
            name="Storage"
            img="http://lorempixel.com/output/nightlife-q-c-640-480-4.jpg"
            note="$34500"
          ></Space>
        </div>
        <div className="col-sm-4" style={{ marginTop: "5%" }}>
          <Space
            color="#7c7cc1d6"
            name="Notification Alert"
            img="http://lorempixel.com/output/city-q-c-640-480-9.jpg"
            note="Issues 74"
          ></Space>
        </div>
        <div
          className="col-sm-5"
          style={{
            marginTop: "20%",
            background: "whitesmoke",
            boxShadow: "-4px 7px 20px 6px"
          }}
        >
          <Charts></Charts>
        </div>

        <div
          className="col-sm-5"
          style={{
            marginTop: "20%",
            background: "whitesmoke",
            boxShadow: "-4px 7px 20px 6px",
            marginLeft: "10%"
          }}
        >
          <Tables></Tables>
        </div>
      </div>
      <hr style={{ marginTop: "10%" }}></hr>
      <div className="row" style={{ fontWeight: "100" }}>
        <div className="col-sm-2">Creative Tim</div>
        <div className="col-sm-2">About US</div>
        <div className="col-sm-2">Blog </div>
        <div
          className="col-sm-6 d-flex justify-content-end"
          style={{ textAlign: "right" }}
        >
          <p>2019, made with favorite by Creative Tim for a better web.</p>
        </div>
      </div>
    </div>
  );
};
export default DashboardItem1;
