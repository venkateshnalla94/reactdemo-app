import React from "react";
import "../landing/landing_css/landingFreeDemo.css";
import Button from "react-bootstrap/Button";
const LandingFreeDemo = () => {
  return (
    <div className="free_demo">
      <div className="row">
        <div className="col-sm-12">
          <h2
            style={{
              marginBottom: "0%",
              fontSize: "40px",
              fontWeight: "100",
              marginTop: "5%",
              marginLeft: "10%"
            }}
          >
            Get Free Demo
          </h2>
        </div>
      </div>
      <div className="row" id="demo_desc">
        <div className="col-sm-5">
          <div className="container">
            <div className="row">
              <p className="demo_paragraph">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="row " id="products">
              <div className="col-sm-5">
                <h6>What is in Demo?</h6>
                <div>
                  <h6 className="elements">Elements · 50</h6>
                  <h6 className="elements">Plugins · 4</h6>
                  <h6 className="elements">Examples Pages · 3</h6>
                  <h6 className="elements">-</h6>
                  <h6 className="elements">-</h6>
                  <h6 className="elements">-</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <h6>What is in PRO Version?</h6>
                <div>
                  <h6 className="elements">Elements · 1000</h6>
                  <h6 className="elements">Plugins · 8</h6>
                  <h6 className="elements">Examples Pages · 11</h6>
                  <h6 className="elements">+ Documentation</h6>
                  <h6 className="elements">+ SASS Files</h6>
                  <h6 className="elements">+ Photoshop Files</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="container_button">
            <Button id="ternary_button" variant="secondary">
              Get Free Demo
            </Button>
          </div>
        </div>
        <div className="col-sm-6">
          <img
            className="demo_image"
            src="https://s3.amazonaws.com/creativetim_bucket/products/170/thumb/opt_nuk_react_thumbnail.jpg?1563782899"
          />
        </div>
      </div>
    </div>
  );
};
export default LandingFreeDemo;
