import React, { Component, Fragment } from "react";
import Axios from "axios";
import Combine_role from "./Combine_role";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./Addrole.css";
import Editrole from "./Editrole";
class Addrole extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleModalAddOpen = this.handleModalAddOpen.bind(this);
    this.handleModalEditOpen = this.handleModalEditOpen.bind(this);
    this.handleModalAddClose = this.handleModalAddClose.bind(this);
    this.handleModalEditClose = this.handleModalEditClose.bind(this);

    this.state = {
      addRoleFlag: false,
      editRoleFlag: false,
      gifs: []
    };
  }
  handleModalAddClose() {
    this.setState({ addRoleFlag: false });
  }
  handleModalAddOpen() {
    this.setState({ addRoleFlag: true });
  }
  handleModalEditOpen() {
    this.setState({ editRoleFlag: true });
  }
  handleModalEditClose() {
    this.setState({ editRoleFlag: false });
  }

  async componentDidMount() {
    await Axios.get("https://jsonplaceholder.typicode.com/users").then(
      response => {
        this.setState({
          gifs: response.data
        });
      }
    );
    console.log(this.state.gifs);
  }

  render() {
    const table_rows = this.state.gifs.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.username}</td>
          <td>{item.website}</td>
          <td>
            {" "}
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{ cursor: "pointer" }}
              onClick={this.handleModalEditOpen}
            />
            <Modal
              size="lg"
              className="modal fade bd-example-modal-lg"
              show={this.state.editRoleFlag}
              onHide={this.handleModalEditClose}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <Editrole />
              </Modal.Body>
            </Modal>
          </td>
          <td>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ cursor: "pointer" }}
              onClick={e =>
                window.confirm("PLEASE CONFIRM REMOVAL OF DOD Manager") &&
                this.deleteItem(e)
              }
            />
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="row">
              <h2 className="huhu">
                Messaging System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(i.e. user
                successfully added)
              </h2>
            </div>
            <div className="row">
              <div className="col">
                <h4>Role Managment </h4>
              </div>
              <div className="col-md-6">
                <span className="float-right">
                  <Button
                    variant="primary"
                    color="primary"
                    onClick={this.handleModalAddOpen}
                    id="butt"
                  >
                    ADD Role
                  </Button>
                </span>

                <Modal
                  size="lg"
                  className="modal fade bd-example-modal-lg"
                  show={this.state.addRoleFlag}
                  onHide={this.handleModalAddClose}
                >
                  <Modal.Header closeButton id="close" />
                  <Modal.Body>
                    <form>
                      <div className="form-row" id="tpad">
                        <div className="form-group col-md-2" />
                        <div className="form-group col-md-4">
                          <h5>CREATE NEW Role</h5>
                        </div>
                      </div>
                      <div className="form-row" id="tpad">
                        <div className="form-group col-md-1" />
                        <div className="form-group col-md-3">
                          <label for="inputEmail4">Role</label>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="textbox"
                            className="form-control"
                            placeholder="Role Name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-1" />
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Description</label>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="textbox"
                            className="form-control"
                            id="Description"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={this.handleModalAddClose}
                      color="primary"
                    >
                      CREATE ROLE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th> Phone</th>
                    <th> UserName</th>
                    <th> Org</th>
                    <th>Edit</th>
                    <th>Delete</th>
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
export default Addrole;
