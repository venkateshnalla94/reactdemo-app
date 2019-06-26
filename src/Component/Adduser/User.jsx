import React, { Component } from "react";
import "./User.css";
class User extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col">
            <div className="row">
              <h2 className="huhu">
                Messaging System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(i.e. user
                successfully added)
              </h2>
            </div>
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role's</th>
                    <th>Creation Date</th>
                    <th>Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>email_address@cinco.ca</td>
                    <td>Sam</td>
                    <td>Smith</td>
                    <td>Account Manager</td>
                    <td>2018.12.21 @ 3:09 p</td>
                    <td>
                      3 Days <span class="oi oi-pencil" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
