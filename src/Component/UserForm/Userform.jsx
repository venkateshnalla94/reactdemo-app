import React, { Component } from "react";
import "./Userform.css";
import Button from "@material-ui/core/Button";
class Userform extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Userform;
