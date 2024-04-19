import React, { useState } from 'react';
import '../component/User_Panel/userpanel.css';

export default function UserPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-btn'); // Select the button
    
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
      openBtn.style.display = 'block'; // Show the button when closing the sidebar
    } else {
      sidebar.style.width = '250px';
      openBtn.style.display = 'none'; // Hide the button when opening the sidebar
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <h2 onClick={toggleSidebar}>Dashboard</h2>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="#">Chat</a></li>
          <li><a href="#">Logout</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>

      <nav className="navbar custom-margin">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn custom-color" type="submit">Search</button>
          </form>

          <div>
            <div className="circle">
              <img src="" alt=""/>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <button className="open-btn custom-button" onClick={toggleSidebar}>*</button>
      </div>
    </>
  );
}
