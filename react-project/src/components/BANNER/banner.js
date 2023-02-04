import React from "react";
import Img1 from "../images/Img1";
import "./banner.css";


const Banner = () => {
    return (
        <>
           <div className="banner">
              <div className="container">
                 <div className="row banner_row">
                        <div className="col-6 col-6_left">
                            <h1>Order Products<br></br>
                                Faster Easier
                            </h1>

                            <p>Order your favourite foods at any time <br></br> and we will deliver them right to where<br></br>you are.</p>
                            <a href="#">Get Started</a>
                        </div>

                        <div className="col-6">
                            <img src={Img1}></img>
                        </div>
                 </div>
              </div>
           </div>
        </>
    )
}


export default Banner;


