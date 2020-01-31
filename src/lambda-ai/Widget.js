import React from "react";
import { Button, Icon, Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const Widget = ({ setWidgetOn }) => {
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
            style={{ margin: "20px" }}
            onClick={() => {
              setWidgetOn(false);
            }}
          />
        </div>
        <Title level={1}>Lambda AI Widget</Title>
        <Paragraph>Select all the images that contain coffee cups.</Paragraph>
        <div style={{ margin: "40px 10vw 40px" }}>
          <Row gutter={[8, 16]}>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
            <Col span={8}>
              <h1>Column 1</h1>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Widget;
