import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Createitem from "./Createitem";
import Edititem from "./Edititem";
import CheckOut from "./CheckOut";
import axios from "axios";
class Viewitems extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleEditOpen = this.handleEditOpen.bind(this);
    this.handleEditClose = this.handleEditClose.bind(this);
    this.handleCreateItemOpen = this.handleCreateItemOpen.bind(this);
    this.handleCreateItemClose = this.handleCreateItemClose.bind(this);
    this.handleCheckoutOpen = this.handleCheckoutOpen.bind(this);
    this.handleCheckoutClose = this.handleCheckoutClose.bind(this);
    this.state = {
      editFlag: false,
      createitemFlag: false,
      checkoutFlag: false,
      cons: []
    };
  }
  handleEditOpen() {
    this.setState({ editFlag: true });
  }
  handleEditClose() {
    this.setState({ editFlag: false });
  }
  handleCreateItemOpen() {
    this.setState({ createitemFlag: true });
  }
  handleCreateItemClose() {
    this.setState({ createitemFlag: false });
  }
  handleCheckoutOpen() {
    this.setState({ checkoutFlag: true });
  }
  handleCheckoutClose() {
    this.setState({ checkoutFlag: false });
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
    const table_rows = this.state.cons.map((data, index) => {
      return (
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.website}</td>
          <td>
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ cursor: "pointer" }}
              onClick={this.handleCheckoutOpen}
            />
            <Modal
              size="lg"
              className="modal fade bd-example-modal-lg"
              show={this.state.checkoutFlag}
              onHide={this.handleCheckoutClose}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <CheckOut />
              </Modal.Body>
              <Modal.Footer>
                <div className="form-group col-md-4">
                  <Button variant="primary" onClick={this.handleCheckoutClose}>
                    Update
                  </Button>
                </div>
              </Modal.Footer>
            </Modal>
          </td>
          <td>
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{ cursor: "pointer" }}
              onClick={this.handleEditOpen}
            />
            <Modal
              size="lg"
              className="modal fade bd-example-modal-lg"
              show={this.state.editFlag}
              onHide={this.handleEditClose}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <Edititem />
              </Modal.Body>
              <Modal.Footer>
                <div className="form-group col-md-4">
                  <Button variant="primary" onClick={this.handleEditClose}>
                    Update
                  </Button>
                </div>
              </Modal.Footer>
            </Modal>
          </td>
          <td>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ cursor: "pointer" }}
              onClick={e =>
                window.confirm("Please confirm removal of item") &&
                this.deleteItem()
              }
            />
          </td>
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
                <h4>Inventory</h4>
              </div>
              <div className="col-minor">
                {" "}
                <p>CART [0]</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="float-right">
                  <Button
                    variant="primary"
                    onClick={this.handleCreateItemOpen}
                    id="buutt"
                  >
                    CREATE ITEM
                  </Button>
                </span>
              </div>
              <Modal
                size="lg"
                className="modal fade bd-example-modal-lg"
                show={this.state.createitemFlag}
                onHide={this.handleCreateItemClose}
              >
                <Modal.Header closeButton />
                <Modal.Body>
                  <Createitem />
                </Modal.Body>
                <Modal.Footer>
                  <div className="form-group col-md-4">
                    <Button
                      variant="primary"
                      onClick={this.handleCreateItemClose}
                    >
                      CREATE ITEM
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="row">
              <div className="col-4" />
              <div className="col-0.5">
                <p>Filter:</p>
              </div>
              <div className="col-1">
                <p>[Model]</p>
              </div>
              <div className="col-sm-1">
                <p>[———————]</p>
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-0.5">
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
                    <th>name</th>
                    <th>username</th>
                    <th>website</th>
                    <th>Cart</th>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>{table_rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Viewitems;
