import React from 'react';
import { Code2, ShieldCheck, Home, LogOut, LockKeyhole, ScanEye } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import pic from "../Assets/pic.jpg";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("Student_Token") || localStorage.getItem("Admin_Token");
  // localStorage.setItem("Student_Token" , "knvdkv");
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Premium Logo */}
          <div className="logo-container" onClick={() => navigate('/')}>
            <div className="logo-orb">
              <div className="logo-orb-inner">
                <Code2 className="logo-icon" size={28} />
                <div className="logo-orb-ring"></div>
                <ScanEye className="logo-icon-secondary" size={14} />
                <LockKeyhole className="logo-icon-tertiary" size={10} />
              </div>
            </div>
            <div className="logo-text">
              <span className="logo-title">API</span>
              <span className="logo-subtitle">ANTI PLAGIARISM INTERFACE</span>
            </div>
          </div>

          <div className="nav-buttons">
            <button className="nav-button" onClick={() => navigate('/')}>
              <Home className="nav-icon" size={20} />
              <span>Home</span>
            </button>

            {isLoggedIn && (
                <button className="nav-button" onClick={handleLogout}>
                  <LogOut className="nav-icon" size={20} />
                  <span>Logout</span>
                </button>
            )}

            <button className="admin-button">
              <ShieldCheck className="admin-icon" size={20} />
              <span>Admin Portal</span>
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