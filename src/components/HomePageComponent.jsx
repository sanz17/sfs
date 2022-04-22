import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Row, Col } from "react-bootstrap";

export default function HomePageComponent() {
  return (
    <>
      <Row className="landing">
        <Col>
          <LeftSide />
        </Col>
        <Col>
          <RightSide />
        </Col>
      </Row>
    </>
  );
}
