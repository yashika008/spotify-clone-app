import React from "react";
import { ar } from "../../App";
import "./TopArtists.css";
const FourthTab = () => {
  return (
    <div className="FourthTab">
      {ar.map(function (item, i) {
        return (
          <div className="TopArtistData">
            <a target="_blank" href={item.external_urls.spotify}>
              <img className="ArtistCover" src={item.images[1].url}></img>
              <div className="TopArtistName">{item.name}</div>
              <div className="followers">
                Followers: {item.followers.total}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default FourthTab;
