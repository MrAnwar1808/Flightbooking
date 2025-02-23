
import React, { useState } from "react";
import './Hotelform.css';



function Hotelform(){

    const [CheckinDate, setCheckinDate] = useState("")
    const [CheckoutDate, setCheckoutDate] = useState("")


    const handleSubmitform = (e) => {
        e.preventDefault()
        alert("Form Submitted")
    }
    return(
        
        
        <div className="container">
                <h1>Search hotels</h1>
                <h4>Enjoy hassle free bookings with Cleartrip</h4>
                <form action="Hotelsearch" onSubmit={handleSubmitform}>
                    
                     <div className="hotel-inputsearch">
                     <input type="text"
                      placeholder="Enter locality, landmark, city or hotel" />
                     </div>

            <div className="cal-select">
                
                <div className="form-calendar">
                       <input
                        type="date"
                        value={CheckinDate}
                        onChange={(e) => setCheckinDate(e.target.value)}
                       />
                      <input
                       type="date"
                       value={CheckoutDate}
                       onChange={(e) => setCheckoutDate(e.target.value)}
                     />
               </div>

               <div form-slection>
                    <select name="" id="">
                    
                    <option value="adultroom">1 Room, 1 Adult</option>
                    <option value="adultrooms">1 Room, 2 Adults</option>
                    <option value="2adultrooms">2 Rooms, 4 Adults</option>
                    <option value="morerooms"><a href="">Add more rooms and travellers</a></option>
                    </select>
               </div>
              
            </div>

                    <button>Search hotels</button>
                </form>

        </div>

        
    )
}

export default Hotelform