import React from "react";
import Safety from "../Safety/Safety";
import "./Services.css";
import Img4 from "../images/Img4";
import Img5 from "../images/Img5";
import Img6 from "../images/Img6";

const Services = () => {
    return (
        <div className="services">
        <div className="container">
            <div className="row">
                <div className="col-12 col_12_title">
                    <h1>Some Services We<br></br> Offer </h1>
                </div>
            </div>

            <div className="row row_services">
                <div className="col-4 col_4_services">
                      <h4>Payment Done</h4>
                      <img src={Img4}></img>
                      <p>Pay with a Visa or <br></br>PayPal card and without<br></br> much ado.</p>
                      <a href="#">Learn More</a> 
                </div>

                <div className="col-4 col_4_services">
                    <h4>Find Your Product</h4>
                    <img src={Img5}></img>
                    <p>We offer sale of <br></br>products through the <br></br>Internet.</p>
                    <a href="#">Learn More</a> 
                </div>

                <div className="col-4 col_4_services">
                    <h4>Product Received</h4>
                    <img src={Img6}></img>
                    <p>In our app you can see<br></br> the delay time of your <br></br>order.</p>
                    <a href="#">Learn More</a> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services;