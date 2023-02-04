import React from "react";
import "./Delivery.css";
import Img7 from "../images/Img7";


const Delivery = () => {
    return (
        <>
               <div className="delivery_">
         <div className="container">
            <div className="row row_delivery">
                <div className="col-6 col_6_img">
                    <img src={Img7}></img>
                </div>

                <div className="col-6 col_6_right">
                    <h1>Watch Your Delivery</h1>
                    <h1>At Any Time</h1>
                    <p>With our app you can view the route of your order, from our local headquarters
                       to the place where you are. Look for the app now!</p>
                    <i className="fa-brands fa-apple"> <a>App Store</a></i>
                    <i className="fa-brands fa-google-play"> <a>Google Play</a></i>
                    
                </div>
            </div>
         </div>
    </div>
        </>
    )
}

export default Delivery;