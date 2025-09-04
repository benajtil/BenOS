import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import "./css/monaco-overrides.css";

const Playground = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write some code and run it!\n");
  const [output, setOutput] = useState("");
  const iframeRef = useRef(null);
  const pyodideRef = useRef(null);

  useEffect(() => {
    const loadPyodideAndPackages = async () => {
      if (!pyodideRef.current) {
        try {
          const pyodide = await window.loadPyodide();
          pyodideRef.current = pyodide;
        } catch (err) {
          console.error("Failed to load Pyodide", err);
        }
      }
    };

    loadPyodideAndPackages();
  }, []);

  // Run Code Handler
  const runCode = async () => {
    if (language === "javascript") {
      try {
        const log = [];
        const customConsole = {
          log: (...args) => log.push(args.join(" ")),
        };

        const func = new Function("console", code);
        func(customConsole);

        setOutput(log.join("\n") || "✅ Code ran without output");
      } catch (err) {
        setOutput("❌ Error: " + err.message);
      }
    } else if (language === "html") {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(code);
      doc.close();
      setOutput("✅ HTML rendered below");
    } else if (language === "python") {
      try {
        if (!pyodideRef.current) {
          setOutput("⚠️ Pyodide is still loading. Please wait...");
          return;
        }
        const result = await pyodideRef.current.runPythonAsync(code);
        setOutput(result?.toString() || "✅ Python ran with no output");
      } catch (err) {
        setOutput("❌ Python Error: " + err.message);
      }
    } else if (language === "java") {
      setOutput(
        "⚠️ Java execution not supported in-browser.\nYou can still write Java code here."
      );
    }
  };

  return (
    <div className="retro-playground">
      {/* Title Bar */}
      <div className="retro-titlebar">
        <span>Playground.exe</span>
      </div>

      {/* Controls */}
      <span>
        ⚡ Booting up your coding playground... type, run, and hack away like
        it’s 1999!
      </span>

      <div className="retro-controls">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="retro-select"
        >
          <option value="javascript">JavaScript</option>
          <option value="html">HTML / CSS</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <button onClick={runCode} className="retro-btn">
          Run ▶
        </button>
      </div>

      {/* Editor */}
      <div className="retro-editor">
        <Editor
          height="300px"
          language={
            language === "html"
              ? "html"
              : language === "python"
              ? "python"
              : language === "java"
              ? "java"
              : "javascript"
          }
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            suggest: { showWords: true },
          }}
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>

      {/* Output */}
      <div className="retro-output">
        <h4 style={{ color: "black" }}>Output:</h4>
        {language === "html" ? (
          <iframe
            ref={iframeRef}
            title="output"
            className="retro-iframe"
          ></iframe>
        ) : (
          <pre style={{ color: "green" }}>{output}</pre>
        )}
      </div>
    </div>
  );
};

export default Playground;
