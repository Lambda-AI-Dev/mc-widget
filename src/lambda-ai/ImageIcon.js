import React, { useState } from "react";
import { Button, Typography, Icon } from "antd";

const ImageIcon = ({ url }) => {
  let [clicked, setClicked] = useState(false);
  return (
    <div
      style={{ cursor: "pointer", outlineStyle: "none" }}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      {clicked ? (
        <Icon
          type="check-circle"
          theme="twoTone"
          style={{
            fontSize: "30px",
            position: "absolute",
            paddingTop: "5vh",
            paddingLeft: "5vh"
          }}
        />
      ) : null}

      <img
        src={url}
        style={{
          width: "12vh",
          height: "12vh",

          margin: "7px"
        }}
      />
    </div>
  );
};

export default ImageIcon;
