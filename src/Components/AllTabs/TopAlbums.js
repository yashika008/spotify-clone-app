import React from "react";
import { toptracks } from "../../App";
import './TopAlbums.css'

const ThirdTab = () => {
  var TopAlbs = new Set();
  for (let i = 0; i < toptracks.length; i++) {
    TopAlbs.add(toptracks[i].album);
  }
  var TopAlbums = [...TopAlbs];
  console.log(TopAlbums);
  return (
    <div className="ThirdTab">
      {TopAlbums.map(function (item, i) {
        return (
          <div className="TopAlbumsData, col-4">
            <a target="_blank" href={item.external_urls.spotify}>
              <img className="AlbumCover" src={item.images[1].url}></img>
              <div className="TopAlbumName">{item.name}</div>
              <div className="Release">
                Released: {item.release_date}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default ThirdTab;
