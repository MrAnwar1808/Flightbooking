
import React from "react";
import './Hotel.css'
import Asidemenu from "../../Aside/Asidemenu";
import Hotelform from "../Hotelform/Hotelform";
import Advbox1 from "../../Flights/Advbox/Advbox1";
import Advertbox from "../../Flights/Advbox/Advbox2";
import Advertisebox from "../../Flights/Advbox/Advbox3";
import HotelemiCards from "../HotelEmicards/HotelEmi";
import Destination from "../../Flights/Destination/Destination";
import HotelCards from "../Hotelcards/Hotelcards";
import TrendingGateway from "../HotelTrendinggateway/Trendinggateway";


function Hotel(){
    return(
        <div>
            <div className="hotel-content">
                <Asidemenu/>
                <Hotelform/>
                <div className="right-ads">
                    <Advbox1/>
                    <Advertbox/>
                </div>

            </div>

            <Advertisebox/>
            <HotelemiCards/>
            <Destination/>
            <HotelCards/>
            <TrendingGateway/>

        </div>
    )
}

export default Hotel