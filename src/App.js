import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome_View from "./Component/Login_page/Welcome_View";
import Vendor from "./Component/Vendor/Vendor";
import sidenav from "./Component/Side_Nav/sidenav";
import sample from "./Component/Working Example/sample";
import Usermang from "./Component/UserManagment/Usermang";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import User from "./Component/Adduser/User";
import Userform from "./Component/UserForm/Userform";
import Addrole from "./Component/Role/Addrole";
import Editrole from "./Component/Role/Editrole";
import Viewitems from "./Component/Viewitems/Viewitems";
import Createitem from "./Component/Viewitems/Createitem";
import Edititem from "./Component/Viewitems/Edititem";
import CheckOut from "./Component/Viewitems/CheckOut";
import Checkedoutitems from "./Component/CheckedOutItems/Checkedoutitems";
import CheckIn from "./Component/CheckedOutItems/CheckIn";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/vendor" component={Vendor} exact />
          <Route path="/" component={Usermang} exact />
          <Route path="/sidenav" component={sidenav} exact />
          <Route path="/sample" component={sample} exact />
          <Route path="/Usermangment" component={Usermang} exact />
          <Route path="/User" component={User} exact />
          <Route path="/Userform" component={Userform} exact />
          <Route path="/Addrole" component={Addrole} exact />
          <Route path="/Editrole" component={Editrole} exact />
          <Route path="/Viewitems" component={Viewitems} exact />
          <Route path="/Createitem" component={Createitem} exact />
          <Route path="/Edititem" component={Edititem} exact />
          <Route path="/CheckOut" component={CheckOut} exact />
          <Route path="/Checkedoutitems" component={Checkedoutitems} exact />
          <Route path="/CheckIn" component={CheckIn} exact />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
