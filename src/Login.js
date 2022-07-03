import react from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    //BEM
    <div className="login">
      {/* spotify logo */}
      <h1>SpotiStats</h1>
      <h2>A spotistats clone designed to analyse your music on spotify!</h2>
      {/* login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
