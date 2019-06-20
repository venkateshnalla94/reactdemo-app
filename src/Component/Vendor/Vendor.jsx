import React, { Component } from "react";
import "./Vendor.css";
class Vendor extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <h2 id="ven">
            <span className="huhu">Vendor PassCodes</span>
          </h2>
        </div>
        <hr id="break" />
        <h4>AWS</h4>
        <table id="t_1" className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </th>
            </tr>
          </tbody>
        </table>
        <h4>GoDaddy</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </th>
            </tr>
          </tbody>
        </table>
        <div id="button">
          <span>
            <button
              type="button"
              id="successButton"
              className="btn-multiple-state  mb-3   btn btn-primary"
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="icon success">
                <i className="simple-icon-check" />
              </span>
              <span className="icon fail">
                <i className="simple-icon-exclamation" />
              </span>
              <span className="label">
                <span>Submit</span>
              </span>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Vendor;
