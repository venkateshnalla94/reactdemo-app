import React, { Component } from "react";
import "./Usermang.css";

import { Route, Link, Switch } from "react-router-dom";
import SubComp from "./SubComp";

import Addrole from "../Role/Addrole";
import SideBar from "./SideBar";

class Usermang extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-2">
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"Addrole"} />
            </div>
            <div className="col-md-10">
              <Route path="/Usermangment/Addrole" component={Addrole} exact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Usermang;
