import React from "react";
import "./CSS/Home.css";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row className="landing">
        <Col>
          <Image src="./img/imgtwo.jpg" thumbnail style={{ border: "none" }} />
        </Col>
        <Col>
          Secure file storage system
        </Col>
      </Row>
    </>
  );
};
export default Home;
