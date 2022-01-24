import React, { useState } from "react"
import { Navbar,NavDropdown ,Container} from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import "./css/mainheader.css";

export default function Mainheader(){
    const [border, setBorder] = useState("#fafafa");

      const appStyles = {
            border: `2px solid ${border}`,
          };
    return(
        <Container fluid >
            <Navbar collapseOnSelect expand="lg" fixed="top" className="header " style={appStyles}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home" >
                        <img src="./img/Logo.png" className="d-inline-block logo img-fluid" />
                    </Navbar.Brand>
                    <div style={{width: '50%'}}>
                        <i className="bi bi-back" style={{fontSize: '30px', justifyContent: 'end', float: 'right'}} onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="" activeKey="/home">
                            <Nav.Item >
                            <Nav.Link href="" className="admin-tag">Krishna Kumar<br/> Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="" ><img className="admin-img" src="./img/admin.png" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="">
                                    <NavDropdown id="navbarScrollingDropdown" className="arrow-dn">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    </NavDropdown>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="" className="logut-tag">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </Container>
    );
}