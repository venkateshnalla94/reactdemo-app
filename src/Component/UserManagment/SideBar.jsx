import React, { Component } from "react";
import "./Usermang.css";

import { Route, Link, Switch } from "react-router-dom";

import Addrole from "../Role/Addrole";

class SideBar extends Component {
  render() {
    return (
      <div>
        <div id="con-col-2">
          <h2>Inventory</h2>
          <div className="p-2 bg-black">
            <Link to="/Usermangment/Viewitems" className="nav-link">
              View items
            </Link>
            <Link className="nav-link" to="/">
              Reserved Inventory
            </Link>
            <Link className="nav-link" to="/">
              Reserved Items
            </Link>
            <Link to="/Usermangment/Checkedoutitems" className="nav-link">
              Checkedout Items
            </Link>
            <div className="row" />
            <Link to="/Usermangment/SubComp" className="nav-link">
              <h6>Vendor Passcodes</h6>
            </Link>

            <h6 id="um">User Managment</h6>
            <Link to="/Usermangment/user" className="nav-link">
              User
            </Link>
            <Link to="/Usermangment/Addrole" className="nav-link">
              Roles
            </Link>
          </div>
        </div>
        <div className="col" />
      </div>
    );
  }
}
export default SideBar;
