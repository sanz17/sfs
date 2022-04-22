import React from "react";
import './CSS/Add.css'
import {Card, Button} from 'react-bootstrap'

const Add = () => {
  const checkFile=()=>{
      alert("Please choose a File");
  }
  return (
    <>
      <Card className="text-center" collapseOnSelect expand="lg"  variant="dark">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>ADD YOUR FILE BELOW !</Card.Title>
          <Card.Text>
            We will securely store your file.
          </Card.Text>
          <input type="file"  className="choose_file"/> <br />
          <Button variant="primary" className="my-5" onClick={checkFile}>Upload File</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </>
  );
};

export default Add;
