import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import CheckIn from "./CheckIn";

class Checkedoutitems extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleViewOpen = this.handleViewOpen.bind(this);
    this.handleViewClose = this.handleViewClose.bind(this);

    this.state = {
      viewFlag: false
    };
  }
  handleViewOpen() {
    this.setState({ viewFlag: true });
  }
  handleViewClose() {
    this.setState({ viewFlag: false });
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
              <div className="col-10">
                <h4>INVENTORY- CHECKED OUT ITEMS</h4>
              </div>
              <div className="col-minor">
                {" "}
                <p>CART [0]</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5" />
              <div className="col-0.5">
                <p>Filter:</p>
              </div>
              <div className="col-1">
                <p>[User]</p>
              </div>
              <div className="col-sm-1">
                <p>[———————]</p>
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-0.5">
                <p>Sort :</p>
              </div>
              <div className="col-1">
                <p>Date</p>
              </div>
              <div className="col-1">
                <p>[desc]</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-11">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>UserName</th>
                      <th>Check Out Date</th>
                      <th>Check In Date</th>
                      <th>Items</th>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="ent">
                      <td>
                        <Link onClick={this.handleViewOpen}>
                          bob.lee@cinco.ca
                        </Link>
                        <Modal
                          size="lg"
                          className="modal fade bd-example-modal-lg"
                          show={this.state.viewFlag}
                          onHide={this.handleViewClose}
                        >
                          <Modal.Header closeButton />
                          <Modal.Body>
                            <CheckIn />
                          </Modal.Body>
                          <Modal.Footer>
                            <div className="form-group col-md-4">
                              <Button
                                variant="primary"
                                onClick={this.handleViewClose}
                              >
                                Check In
                              </Button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </td>
                      <td>Wed, Dec 23, 2018 @ 5:00pm</td>

                      <td>Wed, Jan 3, 2018 @ 5:00pm</td>
                      <td>5</td>
                      <td>---</td>
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
export default Checkedoutitems;
