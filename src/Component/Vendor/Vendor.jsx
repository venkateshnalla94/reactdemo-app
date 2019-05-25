import React, { Component } from "react";
import "./Vendor.css";
class Vendor extends Component {
  render() {
    return (
      <div class="content">
        <h2>Vendor PassCodes</h2>
        <hr id="break" />
        <h4>AWS</h4>
        <table id="t_1" class="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  class="form-control"
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
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </th>
            </tr>
          </tbody>
        </table>
        <h4>GoDaddy</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  class="form-control"
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
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </th>
              <th>
                <input
                  type="password"
                  class="form-control"
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
              class="btn-multiple-state  mb-3   btn btn-primary"
            >
              <span class="spinner d-inline-block">
                <span class="bounce1" />
                <span class="bounce2" />
                <span class="bounce3" />
              </span>
              <span class="icon success">
                <i class="simple-icon-check" />
              </span>
              <span class="icon fail">
                <i class="simple-icon-exclamation" />
              </span>
              <span class="label">
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
