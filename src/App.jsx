import React from 'react';
import "./App.css"

const App = () => {
    const [htmlCode, setHtmlCode] = React.useState('');
    const [cssCode, setCssCode] = React.useState('');
    const [jsCode, setJsCode] = React.useState('');

    console.log("HTML", htmlCode);
    console.log("CSS", cssCode);
    console.log("JavaScript", jsCode);

    const handleOutput = () => {
        const iframe = document.getElementById("output");
        if (iframe && iframe.contentDocument) {
            iframe.contentDocument.open();
            iframe.contentDocument.write(htmlCode + "<style>" + cssCode + "</style>");
            iframe.contentDocument.close();
        } else {
            console.error("Iframe or its contentDocument is not available.");
        }
    };

    return (
        <div className="playground">
            <div className="left">
                <label>HTML</label>
                <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>
                <label>CSS</label>
                <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>
                <label>JavaScript</label>
                <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
            </div>
            <div className="right">
                <button onClick={handleOutput}>Run</button>
                <iframe id="output"></iframe>
            </div>
        </div>
    );
};

export default App;
