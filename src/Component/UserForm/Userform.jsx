import React, { Component } from "react";
import "./Userform.css";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import footer from "react-bootstrap/Modal";

class Userform extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

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
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal
          size="lg"
          className="modal fade bd-example-modal-lg"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-row" id="tpad">
                <div className="form-group col-md-2" />

                <div className="form-group col-md-2">
                  <h5>CREATE NEW USER</h5>
                </div>
              </div>
              <div className="form-row" id="tpad">
                <div className="form-group col-md-2" />
                <div className="form-group col-md-2">
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
                <div className="form-group col-md-2">
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
                <div className="form-group col-md-2">
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
                <div className="form-group col-md-2">
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
                  <div className="form-row">
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
                  <div className="form-row">
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
                  <div className="form-row" />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Userform;
