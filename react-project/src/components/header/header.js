import React from "react";
import { ReactDOM } from "react";
import "./header.css";

const Header = () => {
    return (
        <>
    <div className="header">
        <div className="container">
            <h3><a className="delivery">Delivery</a></h3>


            <nav>
              <ul class="header__nav">
                <li className="nav__element"><a className="nav__link">Home</a></li>
                <li className="nav__element"><a className="nav__link">About us</a></li>
                <li className="nav__element"><a className="nav__link">Services</a></li>
                <li className="nav__element"><a className="nav__link">Contact us</a></li>
                <li className="nav__element"><a className="nav__link">Order Now!</a></li>
              </ul>
            </nav>
        </div>
    </div>
        </>
    )
}


export default Header;