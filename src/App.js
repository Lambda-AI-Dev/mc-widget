import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Button } from "antd";

import Widget from "./lambda-ai/Widget";

const { Title, Text } = Typography;

function App() {
  const [widgetOn, setWidgetOn] = useState(true);

  return (
    <div style={{ margin: "10vh", textAlign: "center" }}>
      <Title level={1}>My really fun game!</Title>
      <Text>Click on the below to activate Lambda AI Widget</Text>
      <br />
      <Button
        type="primary"
        style={{ margin: "20px" }}
        onClick={() => {
          setWidgetOn(true);
        }}
      >
        Click me
      </Button>
      <Widget />
    </div>
  );
}

export default App;
