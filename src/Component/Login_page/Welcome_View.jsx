import React, { Component } from "react";
import "./Welcome.css";

class Welcome_View extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 id="msg">MESSAGING SYSTEM (i.e. invalid login)</h1>
        </div>
        <div className="container4 ">
          <div className="table-responsive">
            <table className="table-borderless">
              <tr>
                <td>
                  <label for="uname" id="uname">
                    E-Mail Id/Username
                  </label>
                </td>
                <td>
                  <input
                    id="inp"
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                  />
                </td>
              </tr>
              <tr className="table-borderless">
                <td>
                  <label for="psw" id="uname">
                    Password
                  </label>
                </td>
                <td>
                  <input
                    id="inp"
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                  />
                </td>
              </tr>
            </table>
            <button type="Submit" id="submit">
              Submit
            </button>
            <button type="Submit" id="forgot">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome_View;
