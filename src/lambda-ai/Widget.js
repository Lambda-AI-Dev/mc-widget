import React, { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";
import style from "./WidgetStyle";
import { Button, Typography, Progress } from "antd";
const { Title, Paragraph } = Typography;

const Widget = () => {
  // settings
  const DISPLAY_TIME = 30 * 10; // 30 Seconds
  const MULTIPLY_FACTOR = 100.0 / DISPLAY_TIME;
  const testImg =
    "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";

  // class variable
  let [timer, setTimer] = useState(DISPLAY_TIME);
  let [showWidget, setShowWidget] = useState(true);

  useEffect(() => {
    var countDown = setInterval(() => {
      setTimer(timer--);
      if (timer === 0) {
        setShowWidget(false);
        clearInterval(countDown);
      }
    }, 100);
  }, []);

  return (
    <div>
      {showWidget ? (
        <div style={style.background}>
          <div style={style.foreground}>
            <div style={style.header}>
              <Progress percent={timer * MULTIPLY_FACTOR} showInfo={false} />
              <Title level={2} style={{ marginTop: "30px" }}>
                Select all the images that contain coffee cups
              </Title>

              <center style={{ marginTop: "5vh" }}>
                <ImageGrid testImg={testImg}></ImageGrid>
              </center>
              <Button
                type="primary"
                style={style.submitButton}
                onClick={() => {
                  setShowWidget(false);
                }}
              >
                Submit
              </Button>
              <center>
                <Paragraph style={style.footer}>
                  ©2020 Lambda AI | Made with ❤️ in Philly
                </Paragraph>
              </center>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Widget;
