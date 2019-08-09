import React, { Component } from "react";
import "./Usermang.css";
import { Route, Link, Switch } from "react-router-dom";
import SubComp from "./SubComp";
import Addrole from "../Role/Addrole";
import SideBar from "./SideBar";
import User from "../Adduser/User";
import Viewitems from "../Viewitems/Viewitems";
import Checkedoutitems from "../CheckedOutItems/Checkedoutitems";
class Usermang extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-2">
              <SideBar />
            </div>
            <div className="col-md-10">
              <Switch>
                <Route path="/Usermangment/Addrole" component={Addrole} exact />
                <Route path="/Usermangment/User" component={User} exact />
                <Route
                  path="/Usermangment/Viewitems"
                  component={Viewitems}
                  exact
                />
                <Route
                  path="/Usermangment/Checkedoutitems"
                  component={Checkedoutitems}
                  exact
                />
                <Route path="/Usermangment/SubComp" component={SubComp} exact />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Usermang;
