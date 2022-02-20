import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'react-bootstrap';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
