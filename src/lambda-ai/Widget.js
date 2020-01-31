import React from "react";
import ImageIcon from "./ImageIcon";
import { Button, Typography, Icon } from "antd";

const { Title } = Typography;

const Widget = ({ setWidgetOn }) => {
  const testImg =
    "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";
  return (
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
        <div style={{ textAlign: "right" }}>
          <Button
            icon="close"
            shape="circle"
            style={{ marginTop: "20px", marginRight: "20px" }}
            onClick={() => {
              setWidgetOn(false);
            }}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <Title level={2}>
            Select all the images that contain coffee cups
          </Title>

          <center style={{ marginTop: "5vh" }}>
            <table>
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
  );
};

export default Widget;
