import React, {useEffect} from "react";
import "prismjs/themes/prism.css"; // Import Prism.js CSS for theme
import Prism from "prismjs"; // Import Prism.js

const CodeSnippet = ({code, language}) => {
    useEffect(() => {
        // Call Prism.highlightAll() to apply syntax highlighting to all code blocks
        Prism.highlightAll();
    }, []);
    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeSnippet;

