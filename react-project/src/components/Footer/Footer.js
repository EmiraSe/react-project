import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
       <>
              <div className="footer">
        <div className="container">
            <div className="row footer_row">
                <div className="col-4 col_4_footer">
                  <h2>Delivery</h2>
                  <p>Order Products Faster Easier</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
    
                <div className="col-4 col_4_footer_2">
                    <h2>Our Services</h2>
                    <p>Pricing<br></br>
                       Discounts<br></br>
                       Report a bug<br></br>
                       Terms of Service
                       <br></br>
                  <br></br>
                  
                    </p>
                </div>
    
                <div className="col-4 col_4_footer_3">
                    <h2>Our Company</h2>
                    <p>  Blog<br></br>
                         Our mission<br></br>
                         Get in touch
                         <br></br>
                  <br></br>
                  <br></br>
                    </p>
                </div>
            </div>
           
            <div className="row row_last_footer">
                <div className="col-12">
            <p>Bedimcode. All right reserved</p>
            </div>
            </div>
        </div>

       
    </div>
       </>
    )
}

export default Footer;