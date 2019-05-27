import React, { Component } from "react";
import "./sidenav.css";
class sidenav extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a className="nav-link" href="#" id="inv">
                  Inventory
                </a>
                <li id="items">
                  <a className="nav-link" href="#">
                    View items
                  </a>
                </li>
                <li id="items">
                  <a className="nav-link" href="#">
                    Reserved Inventory
                  </a>
                </li>
                <li id="items">
                  <a className="nav-link" href="#">
                    Reserved Items
                  </a>
                </li>
                <li id="items">
                  <a className="nav-link" href="#">
                    Chekedout Items
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#" id="ven">
                    Vendor PassCodes
                  </a>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default sidenav;
