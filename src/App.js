import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contentrender from './Contentrender/Contentrender';  // Import Contentrender
import Footer from './Footer/Footer';
import Footerbottom from './Footer2/Footer2';
import Bookingheader from './Header/Header';
import Hotel from './Hotels/Hotelrender/Hotel';
// import Hotelform from './Hotels/Hotelform';
// import Asidemenu from './Aside/Asidemenu';  // Import Asidemenu for routing
// import Bookingform from './Flights/Maincontent/Bookingform';  // You can route this if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Bookingheader />
        
        <Routes>
          {/* Set up the route for Contentrender */}
          <Route path="/" element={<Contentrender />} />
          {/* You can add more routes if needed */}
          <Route path="/hotels" element={<Hotel/>} />
        </Routes>

        <Footer />
        <Footerbottom />
      </div>
    </Router>
  );
}

export default App;
