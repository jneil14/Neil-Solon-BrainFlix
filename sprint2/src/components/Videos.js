import React from "react";

export default function Videos({ videoData }) {
  // let mappedVideos = videoData.filter().map(video => {

  let mappedVideos = videoData
    .filter((vid, i) => {
      if (i !== 0) {
        return vid;
      }
    })
    .map((video, index) => {
      return (
        <div key={index} className="video">
          {/* container for video data */}
          <div className="video__data">
            <img className="video__data-actual" src={video.image} />
            <div className="video__data-info">
              <h4 className="video__data-title"> {video.title}</h4>
              <h4 className="video__data-channel"> {video.channel} </h4>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <p className="video__title">NEXT VIDEO</p>
      {mappedVideos}
    </>
  );
}
