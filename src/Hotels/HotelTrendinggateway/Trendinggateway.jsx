
import React from "react";
import './Trendinggateway.css'

function TrendingGateway(){
    return(
        <div>
            <h1>Trending getaways!</h1>
            <div className="trending-container">
                <div className="trending-card">
                    <div className="trending-imagegrid">
                        <img src="/Images/trendgoa1.webp" alt="goa1" />
                        <img src="/Images/trendgoa2.webp" alt="goa2" />
                        <img src="/Images/trendgoa3.webp" alt="goa3" />
                    </div>
                    <h4>Best Hotels In Goa</h4>
                    <p>3051 properties available</p>

                </div>


                <div className="trending-card">
                    <div className="trending-imagegrid">
                        <img src="/Images/trendOoty1.webp" alt="ooty1" />
                        <img src="/Images/trendOoty2.webp" alt="ooty2" />
                        <img src="/Images/trendOoty3.webp" alt="ooty3" />
                    </div>
                    <h4>Couple friendly hotels in Ooty</h4>
                    <p>530 properties available</p>

                </div>


                <div className="trending-card">
                    <div className="trending-imagegrid">
                        <img src="/Images/Manali1.webp" alt="manali1" />
                        <img src="/Images/Manali2.webp" alt="manali2" />
                        <img src="/Images/Manali3.webp" alt="manali3" />
                    </div>
                    <h4>Hill view hotels in Manali</h4>
                    <p>1198 properties available</p>

                </div>
            </div>
        </div>
    )
}

export default TrendingGateway