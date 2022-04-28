import React from "react";
import "./CSS/Add.css";
import { Card, Button, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { Row } from "react-bootstrap";

const Add = () => {
  const [file, setFile] = React.useState(null);
  const checkFile = () => {
    if (file === null) {
      alert("Please select a file");
    } else {
      console.log(file.name)
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("user", 1)
      axios
        .post("http://localhost:8000/secure/files/", formData)
        .then((res) => {
          alert("File uploaded");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <Row>
        <Col>
          <Card
            className="text-center"
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>ADD YOUR FILE BELOW !</Card.Title>
              <Card.Text>We will securely store your file.</Card.Text>
              <input
                type="file"
                className="choose_file"
                onChange={onFileChange}
              />{" "}
              <br />
              <Button variant="primary" className="my-5" onClick={checkFile}>
                Upload File
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col>
          <Image src="./img/imgfour.png" thumbnail style={{ border: "none" }} />
        </Col>
      </Row>
    </>
  );
};

export default Add;