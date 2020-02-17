import React from "react";
import MCButton from "./MCButton";

const MCList = ({ data }) => {
  return (
    <ul style={{ listStyleType: "none", textAlign: "left" }}>
      <li>
        <h2>
          Label the <b>brands</b> seen <br />
          in the picture
        </h2>
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          displayText={`1. ${data.tasks[0].classes[0].class}`}
          imageExample={data.tasks[0].classes[0].exampleUrl}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          displayText={`2. ${data.tasks[0].classes[1].class}`}
          imageExample={data.tasks[0].classes[1].exampleUrl}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          displayText={`3. ${data.tasks[0].classes[2].class}`}
          imageExample={data.tasks[0].classes[2].exampleUrl}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton type="none" />
      </li>
    </ul>
  );
};

export default MCList;
