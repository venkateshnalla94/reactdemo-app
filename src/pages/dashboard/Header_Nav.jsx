import React from "react";
import "../dashboard/Dashboard_css/item1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSatelliteDish,
  faBell,
  faUser
} from "@fortawesome/free-solid-svg-icons";
const Header_Nav = props => {
  return (
    <div className="row" id="top_heading">
      <h4 style={{ fontSize: "1.5rem", fontWeight: "100", width: "122px" }}>
        {props.name}
      </h4>
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
  );
};

export default Header_Nav;
