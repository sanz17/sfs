import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Add from "./components/Add";
import Home from "./components/Home";
// import View from "./components/View";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePageComponent />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
