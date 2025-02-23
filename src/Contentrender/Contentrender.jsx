
import React from "react";
import Bookingform from "../Flights/Maincontent/Bookingform";
// import Asidemenu from "../Aside/Asidemenu";
import './Contentrender.css'
import Advbox from "../Flights/Advbox/Advbox1";
import Advertbox from "../Flights/Advbox/Advbox2";
import Advertisebox from "../Flights/Advbox/Advbox3";
import Tripcontent from "../Flights/Tripcards/Tripcontent";
import Destination from "../Flights/Destination/Destination";
import Description from "../Flights/Description/Description";
import Asidemenu from "../Aside/Asidemenu";


function Contentrender(){
    return(
        <div>
        <div className="contentpage">
            <Asidemenu/>
            <Bookingform />
            
            <div className="rightbar">
                <Advbox/>
                <Advertbox />
            </div>
            
        </div>
        <Advertisebox />

        <Tripcontent/>

        <Destination/>

        <Description />
        </div>

    )
}

export default Contentrender