
import React from "react";
import './Tripcontent.css'

function Tripcontent(){
    return(
        <div>

            <div className="bankEMI">
                <img src="/Images/card1.webp" alt="hdfcEmi" />
                <img src="/Images/card2.webp" alt="sbiEmi" />
                <img src="/Images/card3.webp" alt="ctfeddc" />
            </div>

            <div className="flights">
                <img src="/Images/card4.webp" alt="Airindia" />
                <img src="/Images/card5.webp" alt="Malaysia" />
                <img src="/Images/card6.webp" alt="indigo" />
            </div>

            <div className="barcode">
                <img src="/Images/barcode.webp" alt="barcode" />
            </div>

        </div>
    )
}
export default Tripcontent