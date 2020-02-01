import React, { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";
import style from "./WidgetStyle";
import test_imgs from "./TestImg";
import "@lottiefiles/lottie-player";
import { Button, Typography, Progress } from "antd";
const { Title, Text } = Typography;

const Widget = () => {
  // settings
  const DISPLAY_TIME = 30 * 10; // 30 Seconds
  const MULTIPLY_FACTOR = 100.0 / DISPLAY_TIME;
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
      }, 1300);
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
                  Select all images that contain Coffee
                </Title>
                <Text>
                  Click <b>Verify</b> once there are none left
                </Text>

                <center style={{ marginTop: "20px" }}>
                  <ImageGrid testImgs={test_imgs}></ImageGrid>
                </center>
                <Button
                  type="primary"
                  style={style.submitButton}
                  onClick={() => {
                    setShowSuccess(true);
                  }}
                >
                  Verify
                </Button>
                <center>
                  <Text style={style.footer}>
                    ©2020{" "}
                    <a href="https://lambdaai.dev/" target="_blank">
                      Lambda AI
                    </a>{" "}
                    | Made with ❤️ in Philly
                  </Text>
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
