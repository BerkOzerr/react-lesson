import { React, useState, memo, useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import "./App.css";

const Swatch = ({ params, onClick }) => {
  console.log(`Swatch rendered ${params.color}`);
  return (
    <div
      style={{
        width: 75,
        height: 75,
        backgroundColor: params.color,
        margin: 15,
      }}
      onClick={onClick}
    ></div>
  );
};

const MemoedSwatch = memo(Swatch);

function App() {
  const [appRendering, setAppRendering] = useState(0);
  const [color, setColor] = useState("red");
  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => {}, []);
  console.log(`App Rendering -> ${appRendering}`);

  return (
    <div className="app">
      <Button
        className="btn-render"
        variant="contained"
        color="success"
        onClick={() => setAppRendering(appRendering + 1)}
      >
        App Rendering
      </Button>
      <Button
        className="btn-render"
        variant="contained"
        color="secondary"
        onClick={() => setColor(color === "red" ? "blue" : "red")}
      >
        Change Color
      </Button>
      <div>
        <MemoedSwatch params={params} onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
