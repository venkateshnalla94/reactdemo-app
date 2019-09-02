import React from "react";
import Header_Nav from "./Header_Nav";
import Button from "react-bootstrap/Button";

import Footer_Nav from "./Footer_Nav";
const Icons = () => {
  return (
    <div>
      <Header_Nav name="Icons"></Header_Nav>

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
              Material Dashboard Icons
            </h3>
            <h6
              style={{
                fontWeight: "200",
                color: "white",
                marginTop: "3%",
                paddingBottom: "2%"
              }}
            >
              Handcrafted by our friends from Google
            </h6>
          </div>
          <div
            className="container"
            style={{ marginLeft: "20%", marginTop: "5%" }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ytp30ybm3IE"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
export default Icons;
