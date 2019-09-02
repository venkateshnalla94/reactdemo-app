import React from "react";
import Header_Nav from "./Header_Nav";
import Button from "react-bootstrap/Button";

import Footer_Nav from "./Footer_Nav";
const Typography = () => {
  return (
    <div>
      <Header_Nav name="Typography "></Header_Nav>
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
              width: "100%",
              marginTop: "-4%",
              background: "linear-gradient(60deg,#ab47bc,#8e24aa)",
              borderRadius: "2px"
            }}
          >
            <h3 style={{ fontWeight: "200", color: "white", paddingTop: "2%" }}>
              Material Dashboard Heading
            </h3>
            <h6
              style={{
                fontWeight: "200",
                color: "white",
                marginTop: "3%",
                paddingBottom: "2%"
              }}
            >
              Created using Roboto Font Family
            </h6>
          </div>
          <div className="row">
            <div className="container" style={{ marginTop: "2%" }}>
              <h1 style={{ fontWeight: "100" }}>Typography</h1>
              <div className="row">
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <h1
                    style={{
                      fontWeight: "100",

                      fontSize: "50px"
                    }}
                  >
                    The Life of Material Dashboard
                  </h1>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <h1
                    style={{
                      fontWeight: "100",

                      fontSize: "45px"
                    }}
                  >
                    The Life of Material Dashboard
                  </h1>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <h1
                    style={{
                      fontWeight: "100",

                      fontSize: "40px"
                    }}
                  >
                    The Life of Material Dashboard
                  </h1>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <h1
                    style={{
                      fontWeight: "100",

                      fontSize: "35px"
                    }}
                  >
                    The Life of Material Dashboard
                  </h1>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <p
                    style={{
                      fontWeight: "100"
                    }}
                  >
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at.
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <q
                    style={{
                      fontWeight: "100",
                      fontSize: "25px"
                    }}
                  >
                    The Life of Material Dashboard
                  </q>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-sm-3">
                  <h6
                    style={{
                      marginTop: "10%",
                      fontWeight: "100",
                      color: "grey",
                      fontFamily: "Roboto"
                    }}
                  >
                    Header 1
                  </h6>
                </div>
                <div className="col-sm-9">
                  <small
                    style={{
                      fontWeight: "100"
                    }}
                  >
                    The Life of Material Dashboard
                  </small>
                </div>
              </div>
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
export default Typography;
