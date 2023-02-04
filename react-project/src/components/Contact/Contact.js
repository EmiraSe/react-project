import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <>
               <div className="contact">
        <div className="container">
            <div className="row row_contact">
                <div className="col-6 col_6_contact">
                    <h1>Contact Us From</h1>
                    <h1>Here</h1>
                    <p>You can contact us from here, you can<br></br> write to us, call us or visit our
                       service<br></br> center, we will gladly assist you.</p>
                </div>

                <div className="col-6 col_6_contact_right">
                    <p><span>Telephone:</span> 999 - 888 - 777</p>
                    <p><span>Email:</span> elivery@email.com</p>
                    <p><span>Location:</span> Lima - Peru</p>
                    
             </div>
             <div className="link">
                <a href="#">Contact Us</a>
            </div>
                
            </div>
        </div>
    </div>
        </>
    )
}

export default Contact;