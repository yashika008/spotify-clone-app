import React from "react";
import { toptracks } from "../../App";
import "./TopSongs.css";
const SecondTab = () => {
  return (
    <div className="SecondTab">
      <ul>
        {toptracks.map(function (item, i) {
          return (
            <li key={i}>
              <a target="_blank" href={item.external_urls.spotify}>
                <div className="TopSongItem">
                  <div className="Cover">
                    <img src={item.album.images[2].url}></img>
                  </div>
                  <div className="NameAndArtist, col">
                    <div className="ItemName">{item.name}</div>
                    <div className="ItemArtist">By {item.artists[0].name}</div>
                  </div>
                  <div className="ItemAlbum, col">{item.album.name}</div>
                  <div className="ItemDuration">
                    {Math.floor(
                      Math.floor(item.duration_ms / 1000) / 60
                    ).toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}{" "}
                    :{" "}
                    {(Math.floor(item.duration_ms / 1000) % 60).toLocaleString(
                      "en-US",
                      { minimumIntegerDigits: 2, useGrouping: false }
                    )}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SecondTab;
