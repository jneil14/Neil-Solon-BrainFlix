import React from "react";
import { Link } from "react-router-dom";

export default function Videos({ videoData }) {
  // preloading check
  if (videoData === undefined) {
    return <h3 className="video__loading"> Loading Videos...</h3>;
  } else {
    let mappedVideos = videoData.map((vid, index) => {
        return (
          <Link
            className="video__data--link"
            to={`/video/${vid.id}`}
            key={vid.id}
          >
            <div key={index} className="video">
              {/* container for video data */}
              <div className="video__data">
                <div className="video__data-image">
                  <img
                    className="video__data-actual"
                    src={vid.image}
                    alt={vid.title}
                  />
                </div>

          {/* title and channel container */}
                <div className="video__data-info">
                  <h4 className="video__data-title"> {vid.title}</h4>
                  <h4 className="video__data-channel"> {vid.channel} </h4>
                </div>
              </div>
            </div>
          </Link>
        );
      });

    return (
      <>
        <p className="video__title">NEXT VIDEO</p>
        {mappedVideos}
      </>
    );
  }
}
