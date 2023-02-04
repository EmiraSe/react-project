import React from "react";
import "./Safety.css";
import Img3 from "../images/Img3";

const Safety = () => {
    return (
       <>
             <div className="safety">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Your Safety Is</h1>
                    <h1>Important</h1>

                    <p>When your order reaches you, we have the health safety protocols, so that you
                       are protected from any disease. Watch the video of how the delivery is made.</p>
                </div>

                <div className="col-6">
                    <img src={Img3}></img>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Safety;