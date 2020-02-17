import React, { useState, useEffect } from "react";
import style from "./WidgetStyle";
import MCButton from "./MCButton";
import "@lottiefiles/lottie-player";
import ScrollLock, { TouchScrollable } from "react-scrolllock";
import { Button, Typography, Progress, Row, Col } from "antd";
import { data } from "./fake_data";
import MCList from "./MCList";
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
          //setShowWidget(false);
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
      <ScrollLock isActive={showWidget}>
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
                <div>
                  <div style={style.header}>
                    <Progress
                      percent={timer * MULTIPLY_FACTOR}
                      showInfo={false}
                      status="active"
                    />
                  </div>

                  <center>
                    <table style={{ marginTop: "30px" }}>
                      <tr>
                        <td>
                          <img
                            src={data.tasks[0].imageUrl}
                            style={{ width: "380px", height: "380px" }}
                          />
                        </td>
                        <td>
                          <MCList data={data} />
                        </td>
                      </tr>
                    </table>
                    <Button
                      type="primary"
                      style={{
                        width: "140px",
                        height: "45px",
                        marginTop: "20px"
                      }}
                      onClick={() => {
                        setShowSuccess(true);
                      }}
                    >
                      Verify
                    </Button>
                    <p style={{ marginTop: "35px", color: "#bdc3c7" }}>
                      Powered by{" "}
                      <a
                        href="https://lambdaai.dev/"
                        target="_blank"
                        style={{ color: "#7f8c8d" }}
                      >
                        Lambda AI
                      </a>
                    </p>
                  </center>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </ScrollLock>
    </div>
  );
};

export default Widget;
