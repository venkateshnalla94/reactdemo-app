import React from "react";
import Header_Nav from "./Header_Nav";
import Form from "react-bootstrap/Form";
import "../dashboard/Dashboard_css/item1.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Footer_Nav from "./Footer_Nav";
const Tabel_list = () => {
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
              <th id="table_head_weight">ID</th>
              <th id="table_head_weight">Name</th>
              <th id="table_head_weight">Salary</th>
              <th id="table_head_weight">City</th>
              <th id="table_head_weight">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>1</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Dakota Rice
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>$36400</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Banglore</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>India</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>2</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Minerva Hooper
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>$23,789</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Sinaai-Waas
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Curaçao</td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>3</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Sage Rodriguez
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>$56,142</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Baileux</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Netherlands
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>4 </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Philip Chaney
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>$38,735</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Overland Park
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Korea, South
              </td>
            </tr>
            <tr style={{ color: "#6f6f6ff2" }}>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>5 </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Doris Greene
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>$63,542</td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>
                Feldkirchen in Kärnten
              </td>
              <td style={{ fontWeight: "100", fontSize: ".9rem" }}>Malawi</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div>
      <Header_Nav name="Tabel List "></Header_Nav>
      <div className="row" style={{ marginTop: "6%" }}>
        <div
          className="col-sm-12"
          style={{
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
              width: "95%",
              marginTop: "-4%",
              background: "linear-gradient(60deg,#ab47bc,#8e24aa)",
              borderRadius: "2px",
              opacity: ".9"
            }}
          >
            <h3 style={{ fontWeight: "200", color: "white", paddingTop: "2%" }}>
              Simple Table
            </h3>
            <h6
              style={{
                fontWeight: "200",
                color: "white",
                marginTop: "3%",
                paddingBottom: "2%"
              }}
            >
              Here is a subtitle for this table
            </h6>
          </div>
          <div className="row">
            <div className="container" style={{ marginTop: "2%" }}>
              <DummyComponent></DummyComponent>

              <div className="row d-flex justify-content-end">
                <Button
                  style={{
                    backgroundColor: "#9c27b0",
                    marginTop: "5%",
                    borderColor: "#9c27b0",
                    borderRadius: "500px"
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "8%" }}></hr>
      <Footer_Nav style={{ paddingBottom: "5px" }}></Footer_Nav>
    </div>
  );
};
export default Tabel_list;
