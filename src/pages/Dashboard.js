import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NavigationDashboard from "../components/NavigationDashboard";
import DashboardItem1 from "./dashboard/DashboardItem1";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <NavigationDashboard />
        </div>

        <div className="col-sm-9" style={{ background: "#e0dddd3d" }}>
          <Switch>
            <Route
              path="/Dashboard/DashboardItem1"
              component={DashboardItem1}
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
