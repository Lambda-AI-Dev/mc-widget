import React, { useState, useEffect } from "react";

const MCButton = ({
  displayText,
  imageExample,
  type,
  index,
  mcState,
  setmcState
}) => {
  const defaultStyle = { bg: "#ecf0f1", text: "black" };
  const clickedStyle = { bg: "#4091f7", text: "white" };
  const hoverStyle = { bg: "#7f8c8d", text: "white" };

  const parseMCState = () => {
    if (mcState[index] == 0) return false;
    else return true;
  };

  const parseNoneType = () => {
    if (type == "none") {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    if (parseNoneType()) {
      if (parseMCState()) setmcState([0, 0, 0, 0]);
      else setmcState([0, 0, 0, 1]);
      return;
    }

    const newState = mcState;
    if (parseMCState()) {
      // released
      setStyle(hoverStyle);
      newState[index] = 0;
    } else {
      // actual clicked
      setStyle(clickedStyle);
      newState[index] = 1;
    }
    newState[newState.length - 1] = 0;
    setmcState(newState);
  };

  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    if (parseMCState()) {
      setStyle(clickedStyle);
    } else {
      setStyle(defaultStyle);
    }
  }, [mcState[index]]);

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
        if (!parseMCState()) setStyle(hoverStyle);
      }}
      onMouseLeave={() => {
        if (!parseMCState()) setStyle(defaultStyle);
      }}
      onClick={() => {
        handleClick();
      }}
    >
      {parseNoneType() ? (
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
