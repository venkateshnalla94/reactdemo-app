import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Createitem.css";
import $ from "jquery";
class Createitem extends Component {
  componentDidMount() {
    $("#hehe").click(function() {
      $("h1").toggleClass("red");
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 id="hehe">dd</h1>
        <div className="row">
          <div className="col-1" />
          <div className="col">
            <div className="form-row" id="tpad">
              <div className="form-group col-md-2">
                <label for="Model">Model</label>
              </div>
              <div className="form-group col-md-4">
                <input
                  type="textbox"
                  className="form-control"
                  id="textbox"
                  placeholder="Model"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label for="SKU">SKU</label>
              </div>
              <div className="form-group col-md-4">
                <input
                  type="textbox"
                  className="form-control"
                  placeholder="SKU"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label for="Location">Location</label>
              </div>
              <div className="form-group col-md-4">
                <ButtonGroup justified id="bbuu">
                  <Dropdown>
                    <Dropdown.Toggle className="full-width" variant="success">
                      Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">On-site</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Off-shore</Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={this.toggeleDrop}
                      >
                        Used Internally
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Createitem;
