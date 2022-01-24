import React, { useState } from "react"

import './css/Sidemenu.css'

import Dashboard from './Dashboard';
 import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Navbar,NavDropdown } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-bootstrap";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function Sidemenu() {

  const [border, setBorder] = useState("#fafafa");

      const appStyles = {
            border: `2px solid ${border}`,
          };

    
    return (
     <>
    <div className="hello" style={appStyles}>
       <Navbar >
           
       <Nav className="flex-column">
           <Nav.Item className="pd-l">
              <Link to="/dashboard"><i className="bi bi-columns-gap"></i>Dashboard </Link>
              </Nav.Item>  
              <Nav.Item className="pd-l">
              <Link to="/generatedIds"><i className="bi bi-card-checklist"></i> View / Generate ID</Link>
            </Nav.Item>

            <i class="bi bi-back" onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
             </Nav>
       </Navbar>
       
     
    
     
     </div>
     </>
    );
  }
  
  export default Sidemenu;