import React, { Component } from "react";
import "./Usermang.css";
import Button from "@material-ui/core/Button";

class Usermang extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 " s />
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="container">
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
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="container">
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="container">
                  <Button variant="contained" color="primary">
                    <p>Submit</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Usermang;
