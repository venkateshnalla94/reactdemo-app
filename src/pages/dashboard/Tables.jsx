import React from "react";
import "../dashboard/Dashboard_css/item1.css";
import Nav from "react-bootstrap/Nav";
import "../dashboard/Dashboard_css/item1.css";

import Table from "react-bootstrap/Table";

const Tables = () => {
  const DummyComponent = () => {
    return (
      <div style={{ marginTop: "4%" }}>
        <Table responsive striped hover style={{ fontWeight: "100" }}>
          <thead
            style={{
              fontSize: "0.9rem",
              color: "#ff9800"
            }}
          >
            <tr>
              <th id="table_head_weight">ID</th>
              <th id="table_head_weight">Name</th>
              <th id="table_head_weight">Salary</th>
              <th id="table_head_weight">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>1</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>
                Dakota Rice
              </td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>$36400</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>India</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>1</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>
                Dakota Rice
              </td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>$36400</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>India</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>1</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>
                Dakota Rice
              </td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>$36400</td>
              <td style={{ fontWeight: "100", fontSize: "0.8rem" }}>India</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "-10%" }}>
        <div
          className="container "
          style={{
            background: "linear-gradient(60deg,#ffa726,#fb8c00)",
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
                href="/Landing_page"
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
        <div
          style={{ listStyle: "none", paddingLeft: "0%", paddingBottom: "11%" }}
        >
          <DummyComponent></DummyComponent>
        </div>
      </div>
    </div>
  );
};
export default Tables;
