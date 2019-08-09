import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class SubComp extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h2 id="passcodes">Vendor Passcodes</h2>
        </div>
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
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubComp;
