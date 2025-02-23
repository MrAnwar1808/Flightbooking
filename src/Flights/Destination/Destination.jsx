
import React from "react";
import './Destination.css'

function Destination(){
    return(

        <div className="dest">
            <h2>Popular destinations</h2>

          <div className="alldestinations">
          <div className="destination">
                <img src="/Images/goa.jpg" alt="goa" />
                <h3>Goa</h3>
                <p>3052 Properties</p>
            </div>

            <div className="destination">
                <img src="/Images/Delhi.jpg" alt="delhi" />
                <h3>Delhi</h3>
                <p>2436 Properties</p>
            </div>

            <div className="destination">
                <img src="/Images/bangalore.jpg" alt="bangalore" />
                <h3>Bangalore</h3>
                <p>2500 Properties</p>
            </div>

            <div className="destination">
                <img src="/Images/jaipur.jpg" alt="jaipur" />
                <h3>Jaipur</h3>
                <p>920 Properties</p>
            </div>

            <div className="destination">
                <img src="/Images/pattaya.jpg" alt="pattaya" />
                <h3>Pattaya</h3>
                <p>1850 properties</p>
            </div>
          </div>
        </div>

    )
}

export default Destination