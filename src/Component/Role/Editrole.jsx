import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./Editrole.css";
class Editrole extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-12">
              <div className="row">
                <div className="col">
                  <h4>Menu</h4>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Inventory Menu
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col">
                  <h6 id="perm">Permissions</h6>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      View Only
                    </label>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Edit Inventory
                    </label>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Reserve Inventory
                    </label>
                  </div>
                </div>
              </div>

              <div className="row" id="belowcon">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Vendor Pass Codes Menu
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col">
                  <h6 id="perm">Permissions</h6>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Apple IDs
                    </label>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      AWS
                    </label>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Hosting
                    </label>
                  </div>
                </div>
              </div>

              <div className="row" id="belowcon">
                <div className="col">
                  <Button variant="contained" color="primary">
                    <p>Update</p>
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
export default Editrole;
