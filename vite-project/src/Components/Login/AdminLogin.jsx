import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../Navbar/Navbar.jsx";

const AdminLogin = () => {
    const [seatNumber, setSeatNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({}); // Reset errors

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: seatNumber, password, role: "ADMIN" }), // Added role field
                credentials: "include",
            });

            const data = await response.json();
            console.log("Response:", data);

            if (data.errors) {
                setErrors(data.errors);
            }

            if (data.token) {
                localStorage.setItem("admintoken", data.token); // Store JWT in local storage
                navigate("/adminPortal"); // Redirect on success
            }
        } catch (err) {
            console.error("Error:", err);
        }

    };

    return (
        <div className="login-container">
            <Navbar/>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Admin Login</h1>
                <label className="visible" htmlFor="seat_number">Username</label>
                <input
                    type="text"
                    name="seat_number"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    required
                />
                {errors.seat_number && <div className="error">{errors.seat_number}</div>}

                <label className="visible"  htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errors.password && <div className="error">{errors.password}</div>}

                <button type="submit" className="login-button3">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;