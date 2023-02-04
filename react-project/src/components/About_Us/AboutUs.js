import React from "react";
import "./AboutUs.css";
import Img2 from "../images/Img2";


const AboutUs = () => {
    return (
        <div className="aboutUs_section">
        <div className="container">
            <div className="row aboutUs_row">
                <div className="col-6 aboutUs_img">
                     <img src={Img2}></img>
                </div>

                <div className="col-6 col_6_right">
                     <h1>Find Out a Little More<br></br>
                         About Us
                     </h1>

                    <p>We are a company dedicated to the distribution of 
                       products by delivery to your home or to the place where you are,
                       with the best quality of delivery.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutUs;