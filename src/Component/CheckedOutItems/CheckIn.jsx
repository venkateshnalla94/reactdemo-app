import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
class CheckIn extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col">
            <div className="form-row" id="tpad">
              <div className="form-group col-md-8">
                <label>
                  <h3>Check In</h3>
                </label>
              </div>

              <div className="form-group col-md-4">
                <h6> Total Items : XX</h6>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Items Being Checkout for user</label>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="Email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>SKU</th>
                      <th>Location</th>
                      <th>Condition</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ipad</td>
                      <td>CIA-11</td>
                      <td>Onsite</td>
                      <td>Used/Good</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faComment}
                          style={{ cursor: "pointer" }}
                          onClick={e =>
                            window.confirm("Please confirm removal of item") &&
                            this.deleteItem()
                          }
                        />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckIn;
