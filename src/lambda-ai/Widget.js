import React, { useState, useEffect } from "react";
import ImageIcon from "./ImageIcon";
import { Button, Typography, Progress } from "antd";

const { Title } = Typography;

const Widget = () => {
  // settings
  const DISPLAY_TIME = 30;
  const MULTIPLY_FACTOR = 100.0 / DISPLAY_TIME;
  const testImg =
    "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";

  // temp variable
  let [timer, setTimer] = useState(DISPLAY_TIME);
  let [showWidget, setShowWidget] = useState(true);

  useEffect(() => {
    var newYearCountdown = setInterval(function() {
      setTimer(timer--);
      if (timer === 0) {
        setShowWidget(false);
        clearInterval(newYearCountdown);
      }
    }, 1000);
  }, []);

  return (
    <div>
      {showWidget ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: "10%",
              bottom: "10%",
              margin: "auto",
              background: "white",
              borderRadius: "25px"
            }}
          >
            <div style={{ margin: "20px" }}>
              <Progress percent={timer * MULTIPLY_FACTOR} showInfo={false} />
              <Title level={2} style={{ marginTop: "30px" }}>
                Select all the images that contain coffee cups
              </Title>

              <center style={{ marginTop: "5vh" }}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                      <td>
                        <ImageIcon url={testImg} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
              <div>
                <Button
                  type="primary"
                  style={{
                    marginTop: "5vh",
                    width: "150px",
                    height: "45px"
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Widget;
