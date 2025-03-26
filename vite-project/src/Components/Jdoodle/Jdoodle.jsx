import { useEffect } from "react";

const JDoodleEmbed = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on unmount
        };
    }, []);

    return (
        <div className="jdoodle-container">
            <div data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=0&arg=0"></div>
        </div>
    );
};

export default JDoodleEmbed;
