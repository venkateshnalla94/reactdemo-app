import React from "react";
import Nav from "react-bootstrap/Nav";
import Header_Nav from "./Header_Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../dashboard/Dashboard_css/item1.css";
import Button from "react-bootstrap/Button";
const UserProfile = () => {
  return (
    <div>
      <Header_Nav name="User Profile"></Header_Nav>

      <div className="row" style={{ marginTop: "6%" }}>
        <div
          className="col-sm-7"
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
              Edit Profile
            </h3>
            <h6
              style={{
                fontWeight: "200",
                color: "white",
                marginTop: "3%",
                paddingBottom: "2%"
              }}
            >
              Complete your Profile
            </h6>
          </div>
          <div className="row">
            <div className="container" style={{ marginTop: "2%" }}>
              <Form style={{ color: "grey" }}>
                <Form.Row>
                  <Form.Label column md={6}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="Company"
                    />
                  </Form.Label>

                  <Form.Label column sm={3}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="Username"
                    />
                  </Form.Label>
                  <Form.Label column sm={3}>
                    <input
                      className="labelfield"
                      type="Email"
                      placeholder="Email"
                    />
                  </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "5%" }}>
                  <Form.Label style={{ marginRight: "5%" }} column sm={6}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="Firstname"
                    />
                  </Form.Label>

                  <Form.Label column sm={5}>
                    <input
                      style={{ width: "95%" }}
                      className="labelfield"
                      type="text"
                      placeholder="Lastname"
                    />
                  </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "5%" }}>
                  <Form.Label style={{ marginRight: "5%" }} column sm={12}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="Address"
                    />
                  </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "5%" }}>
                  <Form.Label column md={4}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="City"
                    />
                  </Form.Label>

                  <Form.Label column sm={4}>
                    <input
                      className="labelfield"
                      type="text"
                      placeholder="Country"
                    />
                  </Form.Label>
                  <Form.Label column sm={4}>
                    <input
                      className="labelfield"
                      type="Email"
                      placeholder="Postal Code"
                    />
                  </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "5%" }}>
                  <Form.Label style={{ marginRight: "5%" }} column sm={12}>
                    <input
                      className="labelfield"
                      type="feedback"
                      placeholder="About Me"
                      style={{ height: "80px", borderBottom: "none" }}
                    />
                  </Form.Label>
                </Form.Row>
              </Form>
              <hr></hr>
              <div className="row d-flex justify-content-end">
                <Button
                  style={{
                    backgroundColor: "#9c27b0",
                    marginTop: "5%",
                    borderColor: "#9c27b0"
                  }}
                >
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{
            marginLeft: "5%",
            height: "440px",
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
              borderRadius: "2px",
              opacity: ".9"
            }}
          >
            <img
              style={{
                marginTop: "-25%",
                borderRadius: "50%",
                width: "150px",
                height: "auto",
                marginLeft: "22%"
              }}
              src="https://demos.creative-tim.com/material-dashboard/assets/img/faces/marc.jpg"
            ></img>
            <div className="row d-flex justify-content-center">
              <h6 style={{ marginTop: "10%", color: "#989191d6" }}>
                CEO / CO-FOUNDER
              </h6>
              <h4
                style={{ marginTop: "5%", color: "black", fontWeight: "100" }}
              >
                Alec Thompson
              </h4>
              <p
                style={{
                  marginTop: "5%",
                  color: "#989191d6",
                  fontWeight: "100",
                  fontSize: "0.8rem"
                }}
              >
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button
                style={{
                  width: "100px",
                  backgroundColor: "#9c27b0",
                  marginTop: "5%",
                  borderColor: "#9c27b0",
                  WebkitBorderRadius: "500px"
                }}
              >
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
