import React, { Component } from "react";
import "./User.css";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleDel() {
    this.setState({ show: true });
  }
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
              <div className="col">
                <h4>User Managment </h4>
              </div>
              <div className="col">
                <Button variant="primary" onClick={this.handleShow} id="butt">
                  ADD USER
                </Button>
                <Modal
                  size="lg"
                  className="modal fade bd-example-modal-lg"
                  show={this.state.show}
                  onHide={this.handleClose}
                >
                  <Modal.Body>
                    <form>
                      <div className="form-row" id="tpad">
                        <div className="form-group col-md-2" />

                        <div className="form-group col-md-4">
                          <h5>CREATE NEW USER</h5>
                        </div>
                      </div>
                      <div className="form-row" id="tpad">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-3">
                          <label for="inputEmail4">Email</label>
                        </div>
                        <div className="form-group col-md-4">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">First Name</label>
                        </div>
                        <div className="form-group col-md-4">
                          <input
                            type="textbox"
                            className="form-control"
                            id="First Name"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Last Name</label>
                        </div>
                        <div className="form-group col-md-4">
                          <input
                            type="textbox"
                            className="form-control"
                            id="Last Name"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Password</label>
                        </div>
                        <div className="form-group col-md-4">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-6">
                          <h6>Roles</h6>
                          <div className="form-row" id="rep">
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  DOD Manager
                                </label>
                              </div>
                            </div>
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  DOD Employee
                                </label>
                              </div>
                            </div>
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  Inventory Manager
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-row" id="rep">
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  Account Manager
                                </label>
                              </div>
                            </div>
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  Project Manager
                                </label>
                              </div>
                            </div>
                            <div className="form-group col-md-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineCheckbox1"
                                >
                                  CSR
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer id="footer">
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="row">
              <table className="table table-hover" id="tbl">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role's</th>
                    <th>Creation Date</th>
                    <th>Last Login</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>email_address@cinco.ca</td>
                    <td>Sam</td>
                    <td>Smith</td>
                    <td>Account Manager</td>
                    <td>2018.12.21 @ 3:09 p</td>
                    <td>3 Days</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        style={{ cursor: "pointer" }}
                        onClick={this.handleShow}
                      />
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ cursor: "pointer" }}
                        onClick={e =>
                          window.confirm("PLEASE CONFIRM USER REMOVAL") &&
                          this.deleteItem(e)
                        }
                      />
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
