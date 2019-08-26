import React from "react";
import "../landing/landing_css/landingComment.css";
import Button from "react-bootstrap/Button";
const LandingComment = () => {
  return (
    <div className="landingComment">
      <div className="row">
        <div className="col-sm-7" id="feedback_container">
          <div className="container">
            <h3 className="d-flex justify-content-center" id="item_Demo">
              We are here to help you!
            </h3>
            <div className="container d-flex justify-content-center">
              <img
                id="author_img"
                src="https://s3.amazonaws.com/creativetim_bucket/photos/264729/thumb.jpg?1563798925"
              />
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <h6 className="comment_heading">
                  1 Web Developer commented on this product
                </h6>
              </div>
              <div
                className="row d-flex justify-content-center"
                id="group_button"
              >
                <div className="col-sm-2">
                  <Button block id="buttonGroup" variant="secondary">
                    GitHub
                  </Button>
                </div>
                <div className="col-sm-2">
                  <Button block id="buttonGroup" variant="secondary">
                    Docs
                  </Button>
                </div>
                <div className="col-sm-2">
                  <Button block id="buttonGroup" variant="secondary">
                    FAQ
                  </Button>
                </div>
              </div>
              <div className="row" id="user_comments">
                <div className="col-sm-2 d-flex justify-content-center">
                  <img
                    className="user_img"
                    src="https://s3.amazonaws.com/creativetim_bucket/anonymous_thumb.png"
                  />
                </div>
                <div className="col-md-10">
                  <div className="user_profile">
                    <h4 id="authoer">
                      Venky{" "}
                      <small className="lastCommented"> 3 hours ago</small>
                    </h4>
                  </div>
                  <div>
                    <p className="user_comment">
                      You should use theme-ui for easier customization via
                      Context API... any plans for that?
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <Button className="loginButton" variant="link">
                  Login Here
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingComment;
