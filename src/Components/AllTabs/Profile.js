import React from "react";
import { followers, name, thobda, profileUrl } from "../../App";
import './Profile.css'
const FirstTab = () => {
  return (
    <a href={profileUrl} target="_blank">
    <div className="FirstTab">
      {thobda}
      {name}
      {followers}
      {/* First tab content will go here */}
    </div>
    </a>
  );
};
export default FirstTab;