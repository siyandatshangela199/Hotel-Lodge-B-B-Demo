import React, { useState } from 'react';
import './App.css';
import h from './assets/hotel.jpg';
import a from './assets/a.jpg';
import r from './assets/r.webp';
import e from './assets/e.avif';
import g from './assets/g.avif';
import t from './assets/twins.jpg';
import good from './assets/good.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
// Mock database simulating real-world API data from a lodge
const LODGE_DATA = [
  { id: 1, name: "Affordable Safari Tent ", price: 1800, accommodates: 2, pool: true, wifi: true, image: r },
  { id: 2, name: "Bushveld Family Chalet", price: 2000, accommodates: 4, pool: true, wifi: false, image: e },
  { id: 3, name: "Luxury Suite - 2 Guests ", price: 1200, accommodates: 2, pool: false, wifi: true, image: g },
  { id: 4, name:  "Affordable Twin Beds ", price: 1500, accommodates: 2, pool: false, wifi: true, image: t}
];

export default function App() {
  
  const [requireWifi, setRequireWifi] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // Instant client-side state filtering mechanism

 const filteredRooms = LODGE_DATA.filter(room => {
  const matchesWifi = requireWifi ? room.wifi === true : true;

  const matchesSearch = room.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesWifi && matchesSearch;
});

  return (
    <div className="app">
    <div className="app-container">
      <h1>Sunsand Lodge Collection </h1>
      <header className="main-header">
        <div className='a'>
      <img src={good} alt={good} className="page" />
        <div className="social-links">

  <div className="tem">
    <h2>Sunsand Lodge Collection</h2>
    <p>Experience Comfort. Embrace Nature.</p>
  </div>
  <div className="item">
    <FaMapMarkerAlt size={30} color="red" />
    <h4>Eastern Cape, Sterkpruit 9762</h4>
  </div>
  <div className="social">
    
    <h2>Reservations & Enquiries</h2>
    <p>For bookings, availability, or any enquiries</p>
  </div>
  <div className="items">
    <div className="it">
    <FaPhone size={30} style={{ color: '#1877F2'}}/>
    <p> 065 564 7616</p>
    </div>
    <div className="it">
    <FaWhatsapp size={30} style={{ color: '#25D366' }} />
    <p> 073 912 5423</p>
    </div>
  </div>

  <div className="social-item">
    <FaFacebook size={30} style={{ color: '#1877F2' }} />
    <p> Sunsand Lodge Collection</p>
  </div>

  <div className="social-item">
    <FaEnvelope size={30} style={{ color: '#2956b1' }} />
    <p>sandsanglodge@gmail.com</p>
  </div>

</div></div>
      </header>
      <div className="room-search">
  <div className="search-box">
    <FaSearch size={20} />
    <input
      type="text"
      placeholder="Search for a room..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</div>
      {/* Control Panel Component */}
      

      {/* Renders the Dynamic Grid UI */}
      <main className="room-grid">
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <div key={room.id} className="room-card">
  <img src={room.image} alt={room.image} className="room-image" />

  <div className="room-details">
    <h3>{room.name}</h3>
    <p className="room-meta">Sleeps {room.accommodates} guests</p>

    <div className="amenity-badges">
      {room.wifi && <p className="badge">📶 Wi-Fi</p>}
      {room.pool && <p className="badge">🏊 Pool</p>}
      { <p className="badge">🚘 Free parking</p>}
      

    </div>

    <div className="card-footer">
      <span className="price-tag">
        R{room.price} <small>/ night</small>
      </span>

      <button className="cta-button">
        Check Availability
      </button>
    </div>
  </div>
</div>
          ))
        ) : (
          <p className="no-results">No properties match your filter preferences. Try adjusting your budget slider.</p>
        )}
      </main>
    </div></div>
  );
}
