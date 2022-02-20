import React from "react";
import { Form, Button } from "react-bootstrap";

const LeftSide = () => {
  return (
    <div>
      <Form style={{width:"80%",marginLeft:"10%",marginTop:"10%"}}>
      <Form.Group className="mb-3" controlId="formBasicFname">
          <Form.Label>Enter first name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLname">
          <Form.Label>Enter last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="Sign in">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LeftSide;
