import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const phrases = ["y4sh coming soon ...."];
  const speed = 100; //speed of the text 

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    const interval = setInterval(() => {
      currentText += phrases[0][currentIndex];
      setText(currentText);
      currentIndex++;
      if (currentIndex === phrases[0].length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          currentIndex = 0;
        }, 1000); //
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <h1 className="text-white text-3xl">{text}</h1>
    </div>
  );
};

export default App;