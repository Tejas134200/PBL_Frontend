import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike"; // For C++ and Java
import "./Editor.css";
import Jdoodle from "../Jdoodle/Jdoodle.jsx";
import Navbar from "../Navbar/Navbar.jsx"; // Import the CSS file
import Timer from "../Timer/Timer.jsx";

const Editor = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("js"); // Default language
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [errors, setErrors] = useState([]);

    // Default code snippets for each language
    // const defaultCode = {
    //     js: "// JavaScript code\nfunction hello() {\n  console.log('Hello, World!');\n}",
    //     py: "# Python code\ndef hello():\n    print('Hello, World!')",
    //     cpp: "// C++ code\n#include <iostream>\n\nint main() {\n    std::cout << 'Hello, World!';\n    return 0;\n}",
    //     java: "// Java code\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
    // };
    //
    // // Language modes for CodeMirror
    // const languageModes = {
    //     js: "javascript",
    //     py: "python",
    //     cpp: "text/x-c++src",
    //     java: "text/x-java",
    // };

    // Handle language change
    // const handleLanguageChange = (e) => {
    //     const newLanguage = e.target.value;
    //     setLanguage(newLanguage);
    //     setCode(defaultCode[newLanguage]); // Reset code to default for the new language
    // };

    // Handle running the code
    // const handleRun = async () => {
    //     try {
    //         const response = await fetch("http://localhost:8080/", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ code, language, input }),
    //         });
    //
    //         const data = await response.json();
    //
    //         // Show either output or error
    //         if (data.error) {
    //             setErrors([data.error]);
    //             setOutput(`Error: ${data.error}`);
    //         } else {
    //             setErrors([]);
    //             setOutput(data.output);
    //         }
    //     } catch (error) {
    //         setErrors(["Error connecting to server."]);
    //         setOutput("Error connecting to server.");
    //     }
    // };

    // Keybindings for running code (Ctrl + Enter or Cmd + Enter)
    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    //             handleRun();
    //         }
    //     };
    //
    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    // }, [handleRun]);

    return (
        <>
        <div className="navbar1">
            <Timer/>
        </div>
        <div className="editor-container">
            {/* Question Section (Left Side) */}
            <div className="question-section">
                <h2>Questions</h2>
                <p>This is where the questions will be displayed.</p>
            </div>
            <div className="editor-section">
                <Jdoodle/>

            </div>

            {/* Editor Section (Right Side) */}
            {/*<div className="editor-section">*/}
            {/*    <h2>Code Editor</h2>*/}

            {/*    /!* Language Selection *!/*/}
            {/*    <div className="form-group">*/}
            {/*        <label>Language:</label>*/}
            {/*        <select value={language} onChange={handleLanguageChange}>*/}
            {/*            <option value="js">JavaScript</option>*/}
            {/*            <option value="py">Python</option>*/}
            {/*            <option value="cpp">C++</option>*/}
            {/*            <option value="java">Java</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}

            {/*    /!* Code Editor (CodeMirror) *!/*/}
            {/*    <div className="form-group">*/}
            {/*        <label>Code:</label>*/}
            {/*        <CodeMirror*/}
            {/*            value={code}*/}
            {/*            options={{*/}
            {/*                mode: languageModes[language],*/}
            {/*                theme: "dracula",*/}
            {/*                lineNumbers: true,*/}
            {/*                autofocus: true,*/}
            {/*            }}*/}
            {/*            onBeforeChange={(editor, data, value) => {*/}
            {/*                setCode(value);*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    /!* Input Box *!/*/}
            {/*    <div className="form-group">*/}
            {/*        <label>Input:</label>*/}
            {/*        <textarea*/}
            {/*            className="input-box"*/}
            {/*            value={input}*/}
            {/*            onChange={(e) => setInput(e.target.value)}*/}
            {/*            placeholder="Enter input (if needed)"*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    /!* Run Button *!/*/}
            {/*    <button className="run-button" onClick={handleRun}>*/}
            {/*        Run Code (Ctrl + Enter)*/}
            {/*    </button>*/}

            {/*    /!* Output Box *!/*/}
            {/*    <div className="form-group">*/}
            {/*        <h3>Output:</h3>*/}
            {/*        <textarea*/}
            {/*            className="output-box"*/}
            {/*            value={output}*/}
            {/*            readOnly*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    /!* Error Display *!/*/}
            {/*    {errors.length > 0 && (*/}
            {/*        <div className="error-box">*/}
            {/*            {errors.map((error, index) => (*/}
            {/*                <div key={index} style={{ color: "red" }}>*/}
            {/*                    {error}*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}





            <div className="footer1">

            </div>

    </div>

        </>
);
};

export default Editor;