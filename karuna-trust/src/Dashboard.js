import React, { useState } from "react"
import './css/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Card } from "react-bootstrap";
import Moment from 'react-moment';
import moment from "moment";

export default function Dashboard() {

    const mydate = new Date();
    var weekDayName =  moment(mydate).format('YYYY');
    console.log(weekDayName);
    const [border, setBorder] = useState("#fafafa");
    const appStyles = {
        border: `2px solid ${border}`,
        position: 'fixed',
        overflow: 'hidden',
        // top: '15%'
    };
    return(
        <React.Fragment>
            <div className="container dash-container" style={appStyles}>
                <div className="row ">
                    <div className="col-4">
                        <Card className="card-style">
                            <Card.Body className="card-clr">
                                <Moment >
                                    <h1>{weekDayName}</h1>
                                </Moment>
                            </Card.Body>
                            <Card.Img className="card-clr" variant="bottom" src="./img/dashboard-greeting-img.png" />
                        </Card>
                    </div>
                    <div className="col-8 img-greeting" style={{
                        backgroundImage: `url("./img/blog.png")`, backgroundRepeat: 'no-repeat', width: '100',
                        backgroundSize: 'cover',
                        background: 'linear-gradient(181deg , #0c040433, 0%, #25252533 100%) 0% 0% no-repeat) '}} >
                        <h1>Good Morning</h1>
                        <h2>Krishna Kumar</h2> 
                        <h2>Admin</h2> 
                    </div>
                    <h6 className="txt-cntr">You are Admin of Suganahalli CHC</h6>
                    <div style={{width: '50%'}}>
                        <i className="bi bi-back" style={{fontSize: '30px', justifyContent: 'end', float: 'right'}} onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}