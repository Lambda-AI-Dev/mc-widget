import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Button } from "antd";

import Widget from "./lambda-ai/Widget";

const { Title, Text } = Typography;

function App() {
  return (
    <div style={{ margin: "10vh", textAlign: "center" }}>
      <Title level={1}>Lambda AI Demo</Title>
      <Text>
        We democratize AI by solving one of its biggest challenges: access to
        affordable labeled data.
      </Text>
      <br />
      <Button type="primary" style={{ margin: "20px" }} onClick={() => {}}>
        Learn More
      </Button>
      <Widget />
    </div>
  );
}

export default App;
