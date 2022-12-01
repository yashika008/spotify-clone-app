export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotistats-clone.herokuapp.com/#";
const clientId = "27f8114986ee4f91a40e3e606e5aaf34";

const scopes = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-modify",
  "user-follow-read",
  "user-modify-playback-state",
  "user-read-playback-position",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
