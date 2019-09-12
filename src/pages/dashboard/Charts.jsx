import React from "react";
import Nav from "react-bootstrap/Nav";
import "../dashboard/Dashboard_css/item1.css";
import FormCheck from "react-bootstrap/FormCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const Charts = () => {
  const DummyComponent = () => {
    return (
      <div
        className="form-check form-check-inline d-flex justify-content-center"
        style={{ marginTop: "6%" }}
      >
        <input className="form-check-input" type="checkbox" />
        <label
          className="form-check-label"
          style={{
            fontSize: "0.6rem",
            fontWeight: "100"
          }}
        >
          Flooded: One year later, assessing what was lost and what was found
          when a ravaging rain swept through metro Detroit
        </label>
        <FontAwesomeIcon
          icon={faPencilAlt}
          style={{
            cursor: "pointer",
            display: "flex",

            color: "#a338b5",
            width: "10px"
          }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            cursor: "pointer",
            display: "flex",
            marginLeft: "5%",
            color: "#f35d5dd9",
            width: "10px"
          }}
        ></FontAwesomeIcon>
      </div>
    );
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "-10%" }}>
        <div
          className="container "
          style={{
            background: "linear-gradient(60deg,#ab47bc,#8e24aa)",
            borderRadius: "4px",
            boxShadow:
              "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4)"
          }}
        >
          <Nav
            variant="pills"
            defaultActiveKey="/home"
            style={{ color: "white " }}
          >
            <Nav.Item style={{ marginRight: "15% ", marginLeft: "5%" }}>
              <Nav.Link
                className="activeLinks d-flex justify-content-center"
                href="/"
                style={{ color: "white !important" }}
              >
                Bugs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "15% ", marginLeft: "5%" }}>
              <Nav.Link className="activeLinks" eventKey="link-1">
                Website
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "5%" }}>
              <Nav.Link className="activeLinks" eventKey="disabled">
                Server
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="container">
        <ul
          style={{ listStyle: "none", paddingLeft: "0%", paddingBottom: "11%" }}
        >
          <li>
            <DummyComponent />
            <DummyComponent></DummyComponent>
            <DummyComponent />
            <DummyComponent />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Charts;
