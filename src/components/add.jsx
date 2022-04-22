import React from "react";
import './CSS/Add.css'
import {Card, Button} from 'react-bootstrap'

const Add = () => {
  const checkFile=()=>{
      alert("Chose File");
  }
  return (
    <>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <input type="file"  className="choose_file"/> <br />
          <Button variant="primary" className="my-5" onClick={checkFile}>Upload File</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
};

export default Add;
