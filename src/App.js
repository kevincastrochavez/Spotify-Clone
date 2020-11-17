import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromResponse } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, []);

  console.log(user);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
