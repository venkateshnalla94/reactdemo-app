import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome_View from "./Component/Login_page/Welcome_View";
import Vendor from "./Component/Vendor/Vendor";
import sidenav from "./Component/Side_Nav/sidenav";
import sample from "./Component/Working Example/sample";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/vendor" component={Vendor} exact />
          <Route path="/" component={Welcome_View} exact />
          <Route path="/sidenav" component={sidenav} exact />
          <Route path="/sample" component={sample} exact />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
