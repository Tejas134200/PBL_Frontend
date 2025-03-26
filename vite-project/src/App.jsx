import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Instruction from './Components/Instructions/Instructions';
import Editor from './Components/Editor/Editor';
import Users from './Components/Users/Users';
import Timer from './Components/Timer/Timer';
import Login from "./Components/Login/Login.jsx";
import AdminLogin from "./Components/Login/AdminLogin.jsx";
import AdminPortal from "./Components/AdminPortal/AdminPortal.jsx";
import Jdoodle from "./Components/Jdoodle/Jdoodle.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timer" element={<Timer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AdminLogin" element={<AdminLogin />} ></Route>
            <Route path="/AdminPortal" element={ <AdminPortal />} />
            <Route path="/Jdoodle" element={ <Jdoodle/> } />
          <Route path="/Users" element={<Users />} />
          <Route path="/Editor" element={<Editor />} />
          <Route path="/Instructions" element={<Instruction />} />
        </Routes>
      </Router>
  );
}

export default App;



