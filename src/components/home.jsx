import React from "react";
import "./CSS/Home.css";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
// import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    htmlFontSize: 5,
  },
});
const Home = () => {
  return (
    <>
      <Row className="landing">
        <Col>
          <Image src="./img/imgtwo.jpg" thumbnail style={{ border: "none" }} />
        </Col>
        <Col>
          <ThemeProvider theme={theme}>
            <br /><br /><Typography><strong>Secure file storage system</strong></Typography>
          </ThemeProvider>
        </Col>
      </Row>
    </>
  );
};
export default Home;
