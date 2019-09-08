import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NavigationDashboard from "../components/NavigationDashboard";
import DashboardItem1 from "./dashboard/DashboardItem1";
import UserProfile from "./dashboard/UserProfile";
import Tabel_list from "./dashboard/Tabel_list";
import Typography from "./dashboard/Typography";
import Icons from "./dashboard/Icons";
import UpgradePro from "./dashboard/UpgradePro";
import Notifications from "./dashboard/Notifications";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div
          className="col-sm-3"
          style={{ paddingRight: "0%", paddingLeft: "inherit" }}
        >
          <NavigationDashboard />
        </div>

        <div
          className="col-sm-9"
          style={{
            background: "#e0dddd3d",
            height: "100vh",
            overflow: "scroll",
            paddingBottom: "5%"
          }}
        >
          <Switch>
            <Route
              path="/Dashboard/dashboardItem1"
              component={DashboardItem1}
              exact
            />
            <Route
              path="/Dashboard/userprofile"
              component={UserProfile}
              exact
            />
            <Route path="/Dashboard/tabelList" component={Tabel_list} exact />
            <Route path="/Dashboard/typograpghy" component={Typography} exact />
            <Route path="/Dashboard/icons" component={Icons} exact />
            <Route
              path="/Dashboard/notifications"
              component={Notifications}
              exact
            />
            <Route
              path="/Dashboard/upgradetopro"
              component={UpgradePro}
              exact
            />
          </Switch>
        </div>
      </div>
      <div />
    </div>
  );
};
export default Dashboard;
