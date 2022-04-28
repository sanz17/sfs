import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
// import LeftSide from "./components/LeftSide";
// import RightSide from "./components/RightSide";
import Add from "./components/add";
import Home from "./components/home";
// import View from "./components/View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import View from "./components/view";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePageComponent />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Add" element={<Add />}></Route>
          <Route path="/View" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
