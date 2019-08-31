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
const DashboardItem1 = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="top_heading">
        <h4 style={{ fontSize: "1.5rem", fontWeight: "100" }}>Dashboard</h4>
        <input className="searchField" type="text" placeholder="Search" />
        <div className="col-sm-1">
          <FontAwesomeIcon
            id="fontAwesomSearch"
            icon={faSearch}
            style={{
              cursor: "pointer"
              // width: "36%",
              // marginBottom: "20%"
            }}
            // Inline Styling
          />
        </div>
        <div className="col-sm-1">
          <FontAwesomeIcon
            id="fontAwesomSearch"
            icon={faSatelliteDish}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-sm-1">
          <FontAwesomeIcon
            id="fontAwesomSearch"
            icon={faBell}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-sm-1">
          <FontAwesomeIcon
            id="fontAwesomSearch"
            icon={faUser}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
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
      </div>
    </div>
  );
};
export default DashboardItem1;
