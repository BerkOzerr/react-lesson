import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";

function MyComponent() {
  console.log("MyComponent start");
  const [numbers, setNumbers] = useState([]);
  console.log(`MyComponent  numbers=${JSON.stringify(numbers)}`);

  useEffect(() => {
    fetch("/numbers.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(`data=${JSON.stringify(data)}`);
        setNumbers(data);
        console.log("finished request");
      });
  }, []);

  const addOne = useCallback(() => {
    setNumbers((currentNumbers) => [
      ...currentNumbers,
      currentNumbers.length + 1,
    ]);
  }, []);

  const sum = useMemo(() => numbers.reduce((a, v) => a + v, 0), [numbers]);

  console.log("MyComponent render");
  const out = (
    <div>
      <div>Numbers : {JSON.stringify(numbers)}</div>
      <div>Sum : {sum}</div>
      <button onClick={addOne}>Add one</button>
    </div>
  );
  console.log("MyComponent finished");
  return out;
}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
