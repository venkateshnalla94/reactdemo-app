import React from "react";
import Header_Nav from "./Header_Nav";
import Footer_Nav from "./Footer_Nav";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const UpgradePro = () => {
  const DummyComponent = () => {
    return (
      <div style={{ marginTop: "1%" }}>
        <Table responsive hover style={{ fontWeight: "100" }}>
          <thead
            style={{
              fontSize: "1.2rem",
              color: "#9c27b0"
            }}
          >
            <tr>
              <th id="table_head_weight"></th>
              <th id="table_head_weight">Free</th>
              <th id="table_head_weight">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Components
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>60</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>200</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Plugins</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>2</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>15</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Example Pages
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>3</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>27</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Login, Register, Pricing, Lock Pages{" "}
              </td>
              <td
                style={{ fontWeight: "100", fontSize: ".9rem", color: "red" }}
              >
                x
              </td>

              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ cursor: "pointer", color: "green" }}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation,
                FullCalendar etc...{" "}
              </td>
              <td
                style={{ fontWeight: "100", fontSize: ".9rem", color: "red" }}
              >
                x
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ cursor: "pointer", color: "green" }}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Mini Sidebar
              </td>
              <td
                style={{ fontWeight: "100", fontSize: ".9rem", color: "red" }}
              >
                x
              </td>

              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ cursor: "pointer", color: "green" }}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Premium Support
              </td>
              <td
                style={{ fontWeight: "100", fontSize: ".9rem", color: "red" }}
              >
                x
              </td>

              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ cursor: "pointer", color: "green" }}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}></td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Free</td>

              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Just $49</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}></td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <Button
                  style={{
                    backgroundColor: "grey",
                    marginLeft: "-34%",
                    width: "100px",
                    fontSize: "0.6rem",
                    height: "37px",
                    // marginTop: "5%",
                    borderColor: "whitesmoke",
                    borderRadius: "500px",
                    color: "white"
                  }}
                >
                  Current Version
                </Button>
              </td>

              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                <Button
                  style={{
                    backgroundColor: "#9c27b0",
                    fontSize: "0.6rem",
                    height: "37px",
                    marginLeft: "-34%",
                    width: "100px",
                    // marginTop: "5%",
                    borderColor: "#9c27b0",
                    borderRadius: "500px",
                    color: "white"
                  }}
                >
                  Upgrade To Pro
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div>
      <Header_Nav name="Upgrade"></Header_Nav>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "6%", width: "75%" }}
      >
        <div
          className="col-sm-12"
          style={{
            marginLeft: "35%",
            height: "auto",
            width: "auto",
            paddingBottom: "5%",
            boxShadow:
              "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(132, 125, 134, 0.4) 0px 7px 10px -5px"
          }}
        >
          <div
            className="container"
            style={{
              width: "100%",
              marginTop: "-4%",
              background: "linear-gradient(60deg,#ab47bc,#8e24aa)",
              borderRadius: "2px"
            }}
          >
            <h3 style={{ fontWeight: "200", color: "white", paddingTop: "2%" }}>
              Material Dashboard Pro
            </h3>
            <h6
              style={{
                fontWeight: "200",
                color: "white",
                marginTop: "3%",
                paddingBottom: "2%"
              }}
            >
              <small>
                Are you looking for more components? Please check our Premium
                Version of Material Dashboard.
              </small>
            </h6>
          </div>
          <div className="container">
            <DummyComponent></DummyComponent>
          </div>

          <div className="row d-flex justify-content-end">
            <Button
              style={{
                backgroundColor: "#9c27b0",
                marginTop: "5%",
                borderColor: "#9c27b0",
                borderRadius: "500px",
                color: "white"
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "8%" }}></hr>
      <Footer_Nav style={{ paddingBottom: "5px" }}></Footer_Nav>
    </div>
  );
};
export default UpgradePro;
