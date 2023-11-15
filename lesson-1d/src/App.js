import { React, useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";

const MyComponent = () => {
  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((currentNumber) => {
        console.log(`number :  ${currentNumber}`);
        return currentNumber + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Numbers : {numbers}</div>;
};

function App() {
  const [index, setIndex] = useState(0);
  const updateIndex = useCallback(() => {
    setIndex(index + 1);
  }, [index]);
  return (
    <div className="app-grid-container">
      <MyComponent key={index} />
      <button onClick={updateIndex}>Update Index</button>
    </div>
  );
}

export default App;
