import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [points, setPoints] = useState(0);
  const [step, setStep] = useState(0);

  const handleStep1 = (pointToAdd) => {
    setPoints(points + pointToAdd);
    setStep(step + 1);
  };

  return (
    <div className="App">
      <h1>Current Points: {points}</h1>

      {step === 0 && (
        <form>
          <p>Academic background</p>
          <button onClick={() => handleStep1(30)}>Doctor's degree</button>
          <button onClick={() => handleStep1(25)}>
            Professional degree relating to business management
          </button>
          <button onClick={() => handleStep1(20)}>Master's degree</button>
          <button onClick={() => handleStep1(10)}>Bachelor's degree</button>
        </form>
      )}
    </div>
  );
}
