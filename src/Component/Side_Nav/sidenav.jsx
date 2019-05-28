import React, { Component } from "react";
import "./sidenav.css";
class sidenav extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar bg-primary">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <div className="d-flex flex-column mb-3">
                  <a className="nav-link" href="#" id="inv">
                    Inventory
                  </a>
                  <div className="p-2 bg-primary">
                    <a className="nav-link" href="#" id="items">
                      View items
                    </a>
                  </div>
                  <div className="p-2 bg-primary">
                    <a className="nav-link" href="#" id="items">
                      Reserved Inventory
                    </a>
                  </div>
                  <div className="p-2 bg-primary">
                    <a className="nav-link" href="#" id="items">
                      Reserved Items
                    </a>
                  </div>
                  <div className="p-2 bg-primary">
                    <a className="nav-link" href="#" id="items">
                      Checkedout Items
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="container">
              <a className="nav-link" href="#" id="inv">
                Vendor Passcodes
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default sidenav;
