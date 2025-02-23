
import React from "react";
import './Advbox.css'

function Advertbox(){
    return(
        <div className="advert">

            <div className="offers">
            <p>More offers
            <a href="view">view all</a>
            </p>
            </div>

            <div className="mobi">
                <h3>MobiKwik Exclusive Offer!</h3>
                <p>Flat ₹ 450 off on Flights</p>
                <p>Use Coupon code CTMBK25</p>
                <a href="know more">Know more</a>
            </div>

        </div>
    )
}

export default Advertbox