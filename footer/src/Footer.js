import React, {useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./CSS/Footer.css";

export default function Footer(){

    const [border, setBorder] = useState("#fafafa");
    const appStyles = {
        border: `2px solid ${border}`,
    };
    const styles = {
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "white",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        
    };
    return(
        <footer className="footer" style={appStyles}>
            <Container>
                <Row>
                    <Col xs={1}>
                            <i className="bi bi-back" id="footer-icon" onMouseEnter={() => setBorder("#c83f49")}
                            onMouseLeave={() => setBorder("#fafafa")}>{" "}</i>
                       
                    </Col>
                    <Col xs={3}></Col>
                    <Col xs={4} className="foot-left">
                        <p className="footer1">
                            (c) 2021, Copyright Karuna Trust
                        </p>
                    </Col>
                    <Col xs={4} className="foot-right">
                        <ul>
                            <li className="list-inline-item">
                                Powered by <br/> Sampoorna Swaraj Foundation
                            </li>
                            <li className="list-inline-fd">
                                <img src="./img/powered-by-ssf-logo.png" className="img-responsive" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}