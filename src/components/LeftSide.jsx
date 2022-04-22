import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const LeftSide = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    setFirstName(event.target.value);
  }

  const handleEmail = (event) => {
    setFirstName(event.target.value);
  }

  const handlePassword = (event) => {
    setFirstName(event.target.value);
  }

  const checkFields=() => {
    if(firstName===""){
      alert("First name cannot be empty");
    }else if(lastName===""){
      alert("Last name cannot be empty"); 
    }else if(email === ""){
      alert("Email cannot be empty"); 
      
    }else if(password === ""){
      alert("Password cannot be empty");       
    }else{
      alert("Login Proceeded");       

    }
  }

  return (
    <div>
      <Form style={{width:"80%",marginLeft:"10%",marginTop:"10%"}}>
      <Form.Group className="mb-3" controlId="formBasicFname">
          <Form.Label>Enter first name</Form.Label>
          <Form.Control type="text" placeholder="First name" onChange={handleFirstName} value={firstName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLname">
          <Form.Label>Enter last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" onChange={handleLastName}  value={lastName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password}/>
        </Form.Group>
        <Button variant="primary" type="Sign in" onClick={checkFields}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LeftSide;
