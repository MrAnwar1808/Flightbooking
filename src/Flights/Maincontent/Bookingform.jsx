import React, { useState } from "react";
import './Bookingform.css';

function Bookingform() {
  const [tripType, setTripType] = useState("One way"); 
  const [adults, setAdults] = useState(1); 
  const [children, setChildren] = useState(0); 
  const [infants, setInfants] = useState(0); 
  const [fareClass, setFareClass] = useState("Economy"); 
  const [from, setFrom] = useState(""); 
  const [to, setTo] = useState(""); 
  const [date, setDate] = useState(""); 
  const [returnDate, setReturnDate] = useState(""); 

  const [showPassengers, setShowPassengers] = useState(false); 
 


  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);


  const generatePassengerText = () => {
    let text = '';
    if (adults > 0) text += `${adults} Adult${adults > 1 ? 's' : ''}`;
    if (children > 0) text += `${text ? ', ' : ''}${children} Child${children !== 1 ? 'ren' : ''}`;
    if (infants > 0) text += `${text ? ', ' : ''}${infants} Infant${infants !== 1 ? 's' : ''}`;
    return `${text}, ${fareClass}`;
  };

  return (
    <div className="container">
      <h1>Search Flights</h1>
      <p>Enjoy hassle-free flight ticket bookings at the lowest airfare</p>

      <form>
       
        <div className="form-group">
         
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="One way">→One way</option>
            <option value="Round trip">Round trip</option>
          </select>
    
        
          <select
            value={`${adults} Adult${adults > 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${infants} Infant${infants !== 1 ? 's' : ''}, ${fareClass}`}
            onClick={() => setShowPassengers(!showPassengers)}
          >
            <option>
              {generatePassengerText()}
            </option>
          </select>

          {showPassengers && (
            <div className="passenger-input">
           
              <div>
                <label>Adults<br></br>
                12+ Years</label>
                <button className="inc-dec" onClick={() => decrement(setAdults, adults)}>-</button>
                <input type="text" readOnly value={adults} />
                <button className="inc-dec" onClick={() => increment(setAdults, adults)}>+</button>
              </div>

          
              <div>
                <label>Child <br></br>
                2-12yrs </label>
                <button className="inc-dec" onClick={() => decrement(setChildren, children)}>-</button>
                <input type="text" readOnly value={children} />
                <button className="inc-dec" onClick={() => increment(setChildren, children)}>+</button>
              </div>

          
              <div>
                <label>Infants<br></br>
                Below 2yrs</label>
                <button className="inc-dec" onClick={() => decrement(setInfants, infants)}>-</button>
                <input type="text" readOnly value={infants} />
                <button className="inc-dec" onClick={() => increment(setInfants, infants)}>+</button>
              </div>

        
              <div className="class-selection">
                <button className="btn-class"  onClick={() => setFareClass("Economy")}>Economy</button>
                <button className="btn-class" onClick={() => setFareClass("Business")}>Business Class</button>
                <button className="btn-class" onClick={() => setFareClass("First Class")}>First Class</button>
                <button className="btn-class" onClick={() => setFareClass("Premium Economy")}>Premium Economy</button>
              </div>
            </div>
          )}
         
        </div>

      





      
        <div className="form-places">
          <input
            type="text"
            placeholder="Where from?"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Where to?"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

     

        <div className="form-calander">
         
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
       

        <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            disabled={tripType === "One way"} 
            className={tripType === "One way" ? "disabled-input" : ""} 
         />

        </div>

     

        <div className="form-checkbox">
      
          <div className="checkboxes">
            <label>
              <input type="checkbox" /> Senior citizen fare
            </label>
            <label>
              <input type="checkbox" /> Student fare
            </label>
            <label>
              <input type="checkbox" /> Armed forces fare
            </label>
          </div>
        </div>

    
        <div className="form-bottom">
          <label>
            <input type="checkbox" />
              Unlock 10% extra savings <span style={{backgroundColor: "#e03e00", color: "white", padding:"5px", borderRadius:"5px"}}>New</span><br />
              Cleartrip for Work
          </label>
       
        

       
        <button type="submit" className="btn-search">
          Search Flights
        </button>
        </div>

      </form>
    </div>
  );
}

export default Bookingform;



