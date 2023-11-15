import { React, useMemo, useState } from "react";
import "./App.css";

const getUserData = () => fetch("/user.json").then((resp) => resp.json());

function App() {
  const [info, setInfo] = useState({
    name: "",
    roles: [],
  });
  const roleList = useMemo(
    () => Object.keys(info.roles).filter((k) => info.roles[k]),
    [info.roles]
  );

  const onLoadUser = async () => {
    const data = await getUserData();
    setInfo(data);
  };

  // const onLoadUser = () => {
  //   setName("Test User");
  //   setRoles({
  //     editor: true,
  //   });
  // };
  return (
    <div className="app">
      <div>Name :{JSON.stringify(info.name)}</div>
      <div>Roles :{JSON.stringify(info.roles)}</div>
      <div>rolesList :{JSON.stringify(roleList)}</div>
      <button onClick={onLoadUser}>Load User</button>
    </div>
  );
}

export default App;
