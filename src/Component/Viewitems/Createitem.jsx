import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Createitem.css";
import Button from "react-bootstrap/Button";
import $ from "jquery";
class Createitem extends Component {
  render() {
    return (
      //   <div className="container">
      //     <div className="row justify-content-center">
      //       <div className="col-sm-8">
      //         <Dropdown>
      //           <Dropdown.Toggle variant="success" block>
      //             Dropdown Button
      //           </Dropdown.Toggle>
      //           <Dropdown.Menu>
      //             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      //             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      //             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      //           </Dropdown.Menu>
      //         </Dropdown>
      //       </div>
      //     </div>
      //   </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2" />
          <div className="col">
            <div className="form-row" id="tpad">
              <div className="form-group col-md-2">
                <label>Model</label>
              </div>

              <div className="form-group col-md-8">
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
                <label>SKU</label>
              </div>
              <div className="form-group col-md-8">
                <input
                  type="textbox"
                  className="form-control"
                  placeholder="SKU"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>Location</label>
              </div>
              <div className="form-group col-md-8">
                <Dropdown block>
                  <Dropdown.Toggle variant="success" block>
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu block>
                    <Dropdown.Item href="#/action-1">On-site</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Off-shore</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Used Internally
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>Condition</label>
              </div>
              <div className="form-group col-md-8">
                <Dropdown block>
                  <Dropdown.Toggle variant="success" block>
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu block>
                    <Dropdown.Item href="#/action-1">Used/Good</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Bad</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">New</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="form-row" id="text">
              <div className="form-group col-md-2">
                <label>Label</label>
              </div>
              <div className="form-group col-md-8">
                <textarea className="form-control" rows="5" id="comment" />
              </div>
            </div>
            <div className="form-row" id="text">
              <div className="form-group col-md-2" />

              <div className="form-group col-md-4">
                <Button variant="primary">CREATE ITEM</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Createitem;
