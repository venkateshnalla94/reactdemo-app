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
import axios from "axios";
import "./check.css";
class Checkedoutitems extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleViewOpen = this.handleViewOpen.bind(this);
    this.handleViewClose = this.handleViewClose.bind(this);

    this.state = {
      viewFlag: false,
      cons: []
    };
  }
  handleViewOpen() {
    this.setState({ viewFlag: true });
  }
  handleViewClose() {
    this.setState({ viewFlag: false });
  }
  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({
          cons: response.data
        });
      });
    console.log(this.state.cons);
  }
  render() {
    const tabel_row = this.state.cons.map((data, index) => {
      return (
        <tr id="ent">
          <div className="scrollit">
            <td className="block">
              <Button
                className="btn btn-primary btn-lg btn-block"
                onClick={this.handleViewOpen}
              >
                {data.username}
              </Button>
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
                    <Button variant="primary" onClick={this.handleViewClose}>
                      Check In
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </td>
            <td>{data.date}</td>

            <td>{data.name}</td>
          </div>
        </tr>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
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
                  <tbody>{tabel_row}</tbody>
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
