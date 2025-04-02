import React from 'react';
import { Code2, ShieldCheck } from 'lucide-react';
import pic from "../Assets/pic.jpg";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  // Check if the user is logged in by checking the token in localStorage
  const isLoggedIn = localStorage.getItem("token");


  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <div className="logo">
              <Code2 className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">API</span>
                <span className="logo-subtitle">Anti Plagiarism Interface</span>
              </div>
            </div>
          </div>
          <div className="nav-buttons">
            <button className="admin-button1" onClick={() => navigate('/')}>
              Home
            </button>

            {/* Conditionally render Logout button if logged in */}
            {isLoggedIn && (
                <button className="admin-button1" onClick={handleLogout}>
                  Logout
                </button>
            )}

            <button className="admin-button1" onClick={() => navigate('/AdminLogin')}>
              <ShieldCheck className="admin-icon" />
              Admin Login
            </button>

            <div className="college-logo">
              <img src={pic} alt="College Logo" className="college-logo" />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
