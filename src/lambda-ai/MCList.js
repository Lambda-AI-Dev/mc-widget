import React, { useState } from "react";
import MCButton from "./MCButton";

const MCList = ({ data, mcState, setmcState }) => {
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
          index={0}
          mcState={mcState}
          setmcState={setmcState}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          displayText={`2. ${data.tasks[0].classes[1].class}`}
          imageExample={data.tasks[0].classes[1].exampleUrl}
          index={1}
          mcState={mcState}
          setmcState={setmcState}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          displayText={`3. ${data.tasks[0].classes[2].class}`}
          imageExample={data.tasks[0].classes[2].exampleUrl}
          index={2}
          mcState={mcState}
          setmcState={setmcState}
        />
      </li>
      <li style={{ marginTop: "10px" }}>
        <MCButton
          type="none"
          index={3}
          mcState={mcState}
          setmcState={setmcState}
        />
      </li>
    </ul>
  );
};

export default MCList;
