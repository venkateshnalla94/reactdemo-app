import React, { Component } from 'react';
import './Welcome.css';

class Welcome_View extends Component {
  render() {
    return (

      <div >
        <div><h1 id="msg">MESSAGING SYSTEM (i.e. invalid login)</h1></div>
          <div class="container4 ">
            <div class="table-responsive">
              <table class="table-borderless">
                <tr>
                  <td>
                    <label for="uname" id="uname">E-Mail Id/Username</label>
                  </td>
                  <td>
                    <input id="inp" type="text" placeholder="Enter Username" name="uname" required></input>
                  </td>
                </tr>
                <tr class="table-borderless">
                  <td>
                    <label for="psw" id="uname">Password</label>
                  </td>
                  <td><input id="inp" type="password" placeholder="Enter Password" name="psw" required></input></td>
                </tr>
              </table>
              <button type="Submit" id="submit">Submit</button>
              <button type="Submit" id="forgot">Forgot Password</button>
            </div>
          </div>      
      </div>
    )
  }
}
export default Welcome_View;