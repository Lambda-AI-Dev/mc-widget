import React, { useState, useEffect } from "react";
import ImageIcon from "./ImageIcon";
import { Button, Typography, Progress } from "antd";
const { Title, Paragraph } = Typography;

const style = {
  background: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  foreground: {
    position: "absolute",
    left: "10%",
    right: "10%",
    top: "10%",
    bottom: "10%",
    margin: "auto",
    background: "white",
    borderRadius: "25px"
  },
  header: { margin: "20px" },
  submitButton: {
    marginTop: "3vh",
    width: "150px",
    height: "45px"
  }
};
const Widget = () => {
  // settings
  const DISPLAY_TIME = 30 * 10;
  const MULTIPLY_FACTOR = 100.0 / DISPLAY_TIME;
  const testImg =
    "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";

  // temp variable
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
              <Button type="primary" style={style.submitButton}>
                Submit
              </Button>
              <Paragraph style={{ marginTop: "7vh" }}>
                ©2020 Lambda AI | Made with ❤️ in Philly
              </Paragraph>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Widget;
