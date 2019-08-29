import React from "react";
const Space = props => {
  return (
    <div
      className="container"
      style={{ background: "whitesmoke", boxShadow: "-4px 7px 20px 6px" }}
    >
      <div
        className="container"
        style={{ background: props.color, width: "auto", height: "auto" }}
      >
        <img
          src={props.img}
          style={{
            width: "70%",
            height: "auto",
            marginTop: "-10%",
            marginLeft: "6%"
          }}
        ></img>
        <small
          style={{
            color: "white",
            marginTop: "4%",
            fontSize: "1.5rem",
            display: "flex",
            fontWeight: "200",
            paddingBottom: "10%"
          }}
        >
          {props.name}
        </small>
        <h4
          style={{
            display: "flex",
            color: "whitesmoke",
            paddingBottom: "10%",
            fontWeight: "200"
          }}
        >
          {props.note}
        </h4>
      </div>
    </div>
  );
};
export default Space;
