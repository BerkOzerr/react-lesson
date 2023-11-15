import { React, useMemo, useState } from "react";
import "./App.css";

import Container from "./components/Container";
import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url,
    onSuccess: () => {
      console.log("success");
    },
  });
  console.log("App rendering");
  // return <Container />;
  return (
    <div>
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => setUrl("/berk.json")}>Berk</button>
      <button onClick={() => setUrl("/emre.json")}>Emre</button>
    </div>
  );
}

export default App;
