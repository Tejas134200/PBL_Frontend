import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct way to use navigation
import './Instruction.css';

const Instruction = () => {
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const goEditor = () => {
        window.location.href = 'http://localhost:8000';
    };




    // ✅ Correct way to call both functions
    const handleStartTest = () => {

        goEditor();
    };

    return (
        <div className="instruction-container">
            <h1 className="title">Test Instructions</h1>
            <ul className="instruction-list">
                <li><strong>Read Instructions Carefully:</strong> Read all provided instructions before starting the test.</li>
                <li><strong>Do Not Switch Tabs:</strong> Switching tabs can lead to disqualification or test timeouts.</li>
                <li><strong>No Copy-Paste (unless permitted):</strong> Write all your code directly in the test environment.</li>
                <li><strong>Test Your Code:</strong> Run your code against sample test cases provided by the platform.</li>
                <li><strong>Time Management:</strong> Monitor the timer carefully and prioritize easier questions.</li>
                <li><strong>Avoid Using External Resources (if prohibited):</strong> Stick to the guidelines provided.</li>
                <li><strong>Be Honest and Follow Test Integrity Rules:</strong> Any attempt at cheating will result in disqualification.</li>
            </ul>
            <div className="agreement-container">
                <input
                    type="checkbox"
                    id="agree-checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                />
                <label htmlFor="agree-checkbox"> I agree to the instructions</label>
            </div>
            <button
                className="start-test-button"
                onClick={handleStartTest} // ✅ Calls both functions correctly
                disabled={!agreed}
            >
                Start Test
            </button>
        </div>
    );
};

export default Instruction;
