import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
// import Root from "./Root";

import './css/Sidemenu.css'

import Mainheader from "mainheader/Mainheader";
import Dashboard from "./Dashboard";
import GeneratedIds from "./GeneratedIds";
import Sidemenu from "./Sidemenus";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "footer/Footer";
import {BrowserRouter as Router, Routes, Route, Link,Switch} from "react-router-dom";
import RootPage from "./RootPage";

import "./index.scss";
import "./css/Login.css";
import "./css/mainheader.css";

const App = () => (
 
  <React.Fragment>
    {/* <Mainheader /> */}
    {/* <Login/> */}
    
      <Router>
        <Switch>
          <Route exact path="/" ><Login/></Route>
          <Route exact path="/rootpage"><RootPage /></Route>
        </Switch>
      </Router>
     
   
   
   
    {/* <Router>
      <React.Fragment>
          <Container fluid>
            <Row>
              <Col xs={2}> 
              

                <Sidemenu />
              </Col>
              <Col xs={10}>
                <Routes>
                  <Route path="/dashboard" exact={true} element={<Dashboard />} ></Route>
                  <Route path="/generatedids" exact={true} element={<GeneratedIds />} ></Route>
                </Routes>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      </Router> */}
    <Footer />
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
