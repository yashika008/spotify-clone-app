import react, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("I have a token : ", _token);
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      /*spotify.getMe().then((user) => {
        //console.log("You: ", user);
      });*/
    }
  }, []);
  const userProfile = async () => {
    const currentUser = await spotify.getMe();
    setUsername(currentUser.display_name);
    console.log(username);
  };

  userProfile();

  const renderMeranaam = () => {
    return <h2>Welcome, {username}!</h2>;
  };
  return <div className="app">{token ? renderMeranaam() : <Login />}</div>;
}

export default App;
