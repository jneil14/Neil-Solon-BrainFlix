import React from "react";
import viewIcon from "../Assets/Icons/PNG/Icon-views.png";
import likeIcon from "../Assets/Icons/PNG/Icon-likes.png";

export default function VideoInfo(props) {
  console.log(props.mainVideo);
  const videoInfo = props.mainVideo;

  return (
    <div className="video__info">
      <div className="video__title">
        <h1 className="video__title-text">{props.mainVideo.title}</h1>
      </div>

      <div className="video_data">
        <div className="video__data-subcontainer-one">
          <h3 className="video__data-channel">{videoInfo.channel}</h3>
          <h3 className="video__data-date">{videoInfo.timestamp}</h3>
        </div>

        {/* views and likes container */}
        <div className="video__data-views-likes">
          <div className="video__data-subcontainer-two">
            <img
              className="video__data-views-icon"
              src={viewIcon}
              alt="view icon"
            />
            <h3 className="video__data-views-num">{videoInfo.views}</h3>
          </div>
          <div className="video__data-subcontainer-three">
            <img
              className="video__data-likes-icon"
              src={likeIcon}
              alt="likes icon"
            />
            <h3 className="video__data-likes-num">{videoInfo.likes}</h3>
          </div>
        </div>
        {/* end of views and likes */}
      </div>
    </div>
  );
}
