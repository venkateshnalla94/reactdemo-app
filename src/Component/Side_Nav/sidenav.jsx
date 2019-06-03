import React, { Component } from "react";
import "./sidenav.css";
class sidenav extends Component {
  render() {
    return (
      <div>
        <div className="container fluid" id="page">
          <nav className="navbar ">
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
          </nav>
        </div>
      </div>
    );
  }
}
export default sidenav;
