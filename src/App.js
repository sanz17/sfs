import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row,Col} from 'react-bootstrap';
import Menu from "./components/Menu";
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className='landing'>
        <Col><LeftSide /></Col>
        <Col><RightSide /></Col>
        
      </Row>
    </div>
  );
}

export default App;
