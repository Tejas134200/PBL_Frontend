import React, { useState } from "react";
import "./AdminPortal.css";
import Navbar from "../Navbar/Navbar.jsx";

const AdminPortal = () => {
    const [questionID, setQuestionID] = useState("");
    const [question, setQuestion] = useState("");
    const [seatNumber, setSeatNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleAddQuestion = async () => {
        setMessage("");
        if (!questionID || !question.trim()) {
            setMessage("Please enter a valid Question ID and Question.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8081/api/admin/addQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("admintoken")}` // Pass admintoken in headers
                },
                body: JSON.stringify({ problemId: Number(questionID), question }),
            });


            const data = await response.json();
            if (response.ok) {
                setMessage("Question added successfully!");
                setQuestionID("");
                setQuestion("");
            } else if (response.status === 409) {
                setMessage("Question already exists!");
            } else {
                setMessage(data.error || "Failed to add question.");
            }
        } catch (err) {
            setMessage("Error: " + err.message);
        }
    };

    const handleAddStudent = async () => {
        setMessage("");
        if (!seatNumber.trim() || !password.trim()) {
            setMessage("Please enter a valid Seat Number and Password.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8081/api/admin/addStudent", {
                method: "POST",
                headers: { "Content-Type": "application/json" ,
                    "Authorization": `Bearer ${localStorage.getItem("admintoken")}` // Pass admintoken in headers
                },
                body: JSON.stringify({ username: seatNumber, password, role: "STUDENT" }),
            });

            const data = await response.json();
            if (response.ok || response.status === 201) {
                setMessage("Student added successfully!");
                setSeatNumber("");
                setPassword("");
            } else if (response.status === 409) {
                setMessage("Student already exists!");
            } else {
                setMessage(data.error || "Failed to add student.");
            }
        } catch (err) {
            setMessage("Error: " + err.message);
        }
    };

    const handleRemoveQuestion = async () => {
        setMessage("");
        if (!questionID) {
            setMessage("Please enter a valid Question ID.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/api/admin/delete/question/${questionID}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" ,
                    "Authorization": `Bearer ${localStorage.getItem("admintoken")}` // Pass admintoken in headers
                },
            });

            if (response.ok) {
                setMessage("Question deleted successfully!");
                setQuestionID("");
            } else if (response.status === 404) {
                setMessage("Question not found!");
            } else {
                const data = await response.json();
                setMessage(data.error || "Failed to delete question.");
            }
        } catch (err) {
            setMessage("Error: " + err.message);
        }
    };

    const handleRemoveStudent = async () => {
        setMessage("");
        if (!seatNumber.trim()) {
            setMessage("Please enter a valid Seat Number.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/api/admin/delete/student/${seatNumber}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("admintoken")}` // Pass admintoken in headers
                },
            });

            if (response.ok) {
                setMessage("Student deleted successfully!");
                setSeatNumber("");
            } else if (response.status === 404) {
                setMessage("Student not found!");
            } else {
                const data = await response.json();
                setMessage(data.error || "Failed to delete student.");
            }
        } catch (err) {
            setMessage("Error: " + err.message);
        }
    };

    return (
        <div className="admin-portal-container">
            <Navbar />

            {message && <div className="admin-portal-message">{message}</div>}

            <div className="admin-portal-content">
                {/* Left Side - Add Question */}
                <div className="admin-portal-form">
                    <h2>Add Question</h2>
                    <input
                        className="admin-portal-input"
                        type="number"
                        value={questionID}
                        onChange={(e) => setQuestionID(e.target.value)}
                        placeholder="Question ID"
                    />
                    <textarea
                        className="admin-portal-textarea"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Enter your question..."
                    />
                    <button className="admin-portal-button" onClick={handleAddQuestion}>
                        Add Question
                    </button>
                </div>

                {/* Right Side - Add Student */}
                <div className="admin-portal-form">
                    <h2>Add Student</h2>
                    <input
                        className="admin-portal-input"
                        type="text"
                        value={seatNumber}
                        onChange={(e) => setSeatNumber(e.target.value)}
                        placeholder="Seat Number"
                    />
                    <input
                        className="admin-portal-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="admin-portal-button" onClick={handleAddStudent}>
                        Add Student
                    </button>
                </div>
            </div>

            {/* New Section - Remove Question */}
            <div className="admin-portal-content">
                <div className="admin-portal-form">
                    <h2>Remove Question</h2>
                    <input
                        className="admin-portal-input"
                        type="number"
                        value={questionID}
                        onChange={(e) => setQuestionID(e.target.value)}
                        placeholder="Question ID"
                    />
                    <button className="admin-portal-button" onClick={handleRemoveQuestion}>
                        Remove Question
                    </button>
                </div>

                {/* Right Side - Remove Student */}
                <div className="admin-portal-form">
                    <h2>Remove Student</h2>
                    <input
                        className="admin-portal-input"
                        type="text"
                        value={seatNumber}
                        onChange={(e) => setSeatNumber(e.target.value)}
                        placeholder="Seat Number"
                    />
                    <button className="admin-portal-button" onClick={handleRemoveStudent}>
                        Remove Student
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;
