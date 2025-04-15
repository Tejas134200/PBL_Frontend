import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, LogIn } from "lucide-react"; // Lucide icons
import "./Login.css";
import Navbar from "../Navbar/Navbar.jsx";

const Login = () => {
    const [seatNumber, setSeatNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

        try {
            const response = await fetch("http://localhost:8081/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: seatNumber, password, role: "STUDENT" }),
                credentials: "include",
            });

            const data = await response.json();
            console.log("Response:", data);

            if (data.token) {
                console.log("Token is Generated");
                localStorage.setItem("Student_Name", data.username);
                localStorage.setItem("Student_Token", data.token);
                navigate("/");
            } else {
                console.log("error: Token not found.");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="login-container">
            <Navbar />
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Student Login</h1>

                <div className="input-group">
                    <User className="input-icon" />
                    <input
                        type="text"
                        name="seat_number"
                        placeholder="Seat Number"
                        value={seatNumber}
                        onChange={(e) => setSeatNumber(e.target.value)}
                        required
                    />
                </div>
                {errors.seat_number && <div className="error">{errors.seat_number}</div>}

                <div className="input-group">
                    <Lock className="input-icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errors.password && <div className="error">{errors.password}</div>}

                <button type="submit" className="login-button2">
                    <LogIn size={20} style={{ marginRight: "8px" }} />
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
