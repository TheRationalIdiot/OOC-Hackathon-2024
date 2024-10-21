import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import EventCalendar from './components/calender';
import EventPage from './components/event';
import Eventcard from './components/EventCard';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <header className='App-Header'>
          <nav className='navbar'>
            {/* Assuming the Navbar component is functional, you can import and place it here */}
            {/* <Navbar /> */}
          </nav>
          
          {/* Other components */}
          <SearchBar />
        </header>
        
        <main>
          {/* Define the routes for navigation */}
          <Routes>
            {/* Route for home page with the event calendar */}
            <Route path="/" element={<EventCalendar />} />
            
            {/* Route for individual event page */}
            <Route path="/event/:id" element={<EventPage />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
