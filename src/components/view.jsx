import React from "react";
// import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";

const View = () => {
  return (
    <Card>
      <Card.Header>My account</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Your added files will appear below{" "}
          </p>
          {/* <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
};
export default View;
