import React, { useState, useEffect } from "react";

const MCButton = ({ displayText, imageExample, type }) => {
  const defaultStyle = { bg: "#ecf0f1", text: "black" };
  const clickedStyle = { bg: "#3498db", text: "white" };
  const hoverStyle = { bg: "#7f8c8d", text: "white" };

  const [style, setStyle] = useState(defaultStyle);
  const [clicked, setClick] = useState(false);

  const parseType = () => {
    if (type == "none") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      style={{
        background: `${style.bg}`,
        width: "200px",
        height: "70px",
        borderRadius: "7px",
        cursor: "pointer",
        outlineStyle: "none"
      }}
      onMouseEnter={() => {
        if (!clicked) setStyle(hoverStyle);
      }}
      onMouseLeave={() => {
        if (!clicked) setStyle(defaultStyle);
      }}
      onClick={() => {
        setClick(!clicked);
        if (clicked) setStyle(hoverStyle);
        else setStyle(clickedStyle);
      }}
    >
      {parseType() ? (
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <h3
            style={{
              color: `${style.text}`
            }}
          >
            None of the above
          </h3>
        </div>
      ) : (
        <div style={{ float: "left" }}>
          <img
            src={imageExample}
            style={{
              width: "50px",
              height: "50px",
              marginTop: "10px",
              marginLeft: "15px",
              borderRadius: "7px"
            }}
          />
          <h3
            style={{
              display: "inline",
              verticalAlign: "middle",
              marginLeft: "10px",
              color: `${style.text}`
            }}
          >
            {displayText}
          </h3>
        </div>
      )}
    </div>
  );
};

export default MCButton;
