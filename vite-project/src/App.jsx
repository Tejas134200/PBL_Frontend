import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Instruction from './Components/Instructions/Instructions';
import Editor from './Components/Editor/Editor';
import Timer from './Components/Timer/Timer';
import Login from "./Components/Login/Login.jsx";
import AdminLogin from "./Components/Login/AdminLogin.jsx";
import AdminPortal from "./Components/AdminPortal/AdminPortal.jsx";
// import Jdoodle from "./Components/Jdoodle/Jdoodle.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Navigate } from "react-router-dom";
import TestCompletionPage from "./Components/Last/Last.jsx";
import Question from "./Components/Question/Question.jsx";

function App() {
    const ProtectedRoute = ({ element }) => {
        const token = localStorage.getItem("Admin_Token");
        return token ? element : <Navigate to="/AdminLogin" />;
    };
    localStorage.setItem("Student_Token", "hguyvhf");
    const ProtectedRouteStudent = ({ element }) => {
        const token = localStorage.getItem("Student_Token");
        return token ? element : <Navigate to="/login" />;
    }
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timer" element={<Timer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AdminLogin" element={<AdminLogin />} ></Route>
            <Route path="/AdminPortal" element={<ProtectedRoute element={<AdminPortal />} />} />
            {/*<Route path="/Jdoodle" element={ <Jdoodle/> } />*/}
          <Route path="/Editor" element={<Editor />} />
            <Route path="/TestCompletion" element={<TestCompletionPage/>}/>
            <Route path="/Question" element={<Question />} />
          <Route path="/Instructions" element={<ProtectedRouteStudent element={<Instruction />} />} />
        </Routes>
      </Router>
  );
}

export default App;



