import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log(hash);
  }, []);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}

export default App;
