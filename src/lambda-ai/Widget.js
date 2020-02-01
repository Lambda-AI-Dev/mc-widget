import React, { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";
import style from "./WidgetStyle";
import "@lottiefiles/lottie-player";
import { Button, Typography, Progress } from "antd";
const { Title, Paragraph } = Typography;

const Widget = () => {
  // settings
  const DISPLAY_TIME = 30 * 10; // 30 Seconds
  const MULTIPLY_FACTOR = 100.0 / DISPLAY_TIME;
  const TEST_IMG =
    "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";
  const CHECK_IMG =
    "https://assets4.lottiefiles.com/datafiles/uoZvuyyqr04CpMr/data.json";

  // class variable
  let [timer, setTimer] = useState(DISPLAY_TIME);
  let [showWidget, setShowWidget] = useState(true);
  let [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    var countDown = setInterval(() => {
      setTimer(timer--);
      if (timer === 0) {
        if (!showSuccess) {
          setShowWidget(false);
        }
        clearInterval(countDown);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowWidget(false);
      }, 1900);
    }
  }, [showSuccess]);

  return (
    <div>
      {showWidget ? (
        <div style={style.background}>
          <div style={style.foreground}>
            {showSuccess ? (
              <div>
                <lottie-player
                  autoplay
                  mode="normal"
                  src={CHECK_IMG}
                  style={style.successAnimation}
                ></lottie-player>
              </div>
            ) : (
              <div style={style.header}>
                <Progress
                  percent={timer * MULTIPLY_FACTOR}
                  showInfo={false}
                  status="active"
                />
                <Title level={2} style={{ marginTop: "30px" }}>
                  Select all image that contain coffee cup
                </Title>

                <center style={{ marginTop: "5vh" }}>
                  <ImageGrid testImg={TEST_IMG}></ImageGrid>
                </center>
                <Button
                  type="primary"
                  style={style.submitButton}
                  onClick={() => {
                    setShowSuccess(true);
                  }}
                >
                  Submit
                </Button>
                <center>
                  <Paragraph style={style.footer}>
                    ©2020{" "}
                    <a href="https://lambdaai.dev/" target="_blank">
                      Lambda AI
                    </a>{" "}
                    | Made with ❤️ in Philly
                  </Paragraph>
                </center>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Widget;
