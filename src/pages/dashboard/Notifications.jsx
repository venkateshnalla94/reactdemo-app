import React from "react";
import Header_Nav from "./Header_Nav";
import Footer_Nav from "./Footer_Nav";
import Button from "react-bootstrap/Button";
const Notifications = () => {
  return (
    <div>
      <Header_Nav name="Notifications"></Header_Nav>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "6%", width: "100%" }}
      >
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
              Notifications
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
                Handcrafted by our friend Robert McIntosh. Please checkout the
                full documentation.
              </small>
            </h6>
          </div>

          <div
            className="row"
            style={{
              marginTop: "5%"
            }}
          >
            <div
              className="col-sm-5"
              style={{
                marginLeft: "2%",
                marginRight: "10%",
                color: "white",
                background: "#00cae3",
                height: "30px",
                width: "auto",
                paddingBottom: "5%",
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(132, 125, 134, 0.4) 0px 7px 10px -5px"
              }}
            >
              <h6
                style={{
                  fontWeight: "200",
                  color: "white",
                  marginTop: "3%",
                  paddingBottom: "2%"
                }}
              >
                <small>This is a plain notification</small>
              </h6>
            </div>
            <div
              className="col-sm-5"
              style={{
                borderRadius: "4px",
                color: "white",
                background: "#00cae3",
                height: "30px",
                width: "auto",
                paddingBottom: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(132, 125, 134, 0.4) 0px 7px 10px -5px"
              }}
            >
              <h6
                style={{
                  fontWeight: "200",
                  color: "white",
                  marginTop: "3%",
                  paddingBottom: "2%"
                }}
              >
                <small>
                  <b>Info</b>
                  <p style={{ display: "inline" }}>
                    - This is a regular notification made with ".alert-info"
                  </p>
                </small>
              </h6>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "2%"
            }}
          >
            <div
              className="col-sm-5"
              style={{
                marginLeft: "2%",
                marginRight: "10%",
                color: "white",
                background: "#00cae3",
                height: "30px",
                width: "auto",
                paddingBottom: "5%",
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(132, 125, 134, 0.4) 0px 7px 10px -5px"
              }}
            >
              <h6
                style={{
                  fontWeight: "200",
                  color: "white",
                  marginTop: "3%",
                  paddingBottom: "2%"
                }}
              >
                <small>
                  <b>This is a plain notification with a close button</b>
                </small>
                <p
                  style={{
                    display: "inline",
                    marginLeft: "25%",
                    cursor: "pointer"
                  }}
                >
                  x
                </p>
              </h6>
            </div>
            <div
              className="col-sm-5"
              style={{
                borderRadius: "4px",
                color: "white",
                background: "#55b559",
                height: "30px",
                width: "auto",
                paddingBottom: "5%",
                boxShadow:
                  "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(132, 125, 134, 0.4) 0px 7px 10px -5px"
              }}
            >
              <h6
                style={{
                  fontWeight: "200",
                  color: "white",
                  marginTop: "3%",
                  paddingBottom: "2%"
                }}
              >
                <small>
                  <b>This is a plain notification with a close button</b>
                </small>
                <p
                  style={{
                    display: "inline",
                    marginLeft: "25%",
                    cursor: "pointer"
                  }}
                >
                  x
                </p>
              </h6>
            </div>
          </div>

          {/* Body Here */}

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
export default Notifications;
