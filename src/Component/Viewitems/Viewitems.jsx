import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
class Viewitems extends Component {
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
                <h4>Inventory</h4>
              </div>
              <div className="col-minor">
                {" "}
                <p>CART [0]</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6" />
              <div className="col-2">
                <Button variant="primary">CREATE ITEM</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-4" />
              <div className="col-0.5">
                <p>Filter:</p>
              </div>
              <div className="col-1">
                <p>[Model]</p>
              </div>
              <div className="col-1">
                <p>[———————]</p>
              </div>
              <div className="col-1" />
              <div className="col-0.5">
                <p>Sort :</p>
              </div>
              <div className="col-1">
                <p>Model</p>
              </div>
              <div className="col-1">
                <p>[desc]</p>
              </div>
              <div className="col-1">
                <p>Items:</p>
              </div>
            </div>
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>SKU</th>
                    <th />
                    <th />
                    <th>Location</th>
                    <th>Condition</th>
                    <td />
                    <td />
                    <td />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>iPad Air 2</td>
                    <td>CIA-11</td>
                    <td />
                    <td />
                    <td>On-Site</td>
                    <td>Used / Good</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        style={{ cursor: "pointer" }}
                      />
                      <Modal
                        size="lg"
                        className="modal fade bd-example-modal-lg"
                      >
                        <Modal.Header closeButton id="close" />
                        <Modal.Body />
                      </Modal>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ cursor: "pointer" }}
                        onClick={e =>
                          window.confirm(
                            "PLEASE CONFIRM REMOVAL OF DOD Manager"
                          ) && this.deleteItem(e)
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
export default Viewitems;
