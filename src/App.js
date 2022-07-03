import react, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Tabs from "./Components/TabComponent/Tabs";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
let name = null;
let thobda = null;
let ar = null;
let profileUrl = null;
let toptracks = null;
let followers = null;
function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [picture, setPicture] = useState(null);
  const [fol, Setfol] = useState(null);
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
    ar = (await spotify.getMyTopArtists()).items;
    profileUrl = currentUser.external_urls.spotify;
    toptracks = (await spotify.getMyTopTracks()).items;
    setUsername(currentUser.display_name);
    setPicture(currentUser.images[0].url);
    Setfol(currentUser.followers.total);
    console.log(toptracks);
  };
  userProfile();

  const renderMeranaam = () => {
    return <div className="userName">{username}</div>;
  };

  const renderPicture = () => {
    return <div className="profileImage"><img src={picture} alt=""></img></div>
  };

  const renderfollowers = () => {
    return <div className="userFollowers">Followers: {fol}</div>
  }

  name = renderMeranaam();
  thobda = renderPicture();
  followers = renderfollowers();
  return <div className="app">{token ? <Tabs /> : <Login />}</div>;
}
export default App;
export {name, thobda, ar, followers, toptracks, profileUrl};
