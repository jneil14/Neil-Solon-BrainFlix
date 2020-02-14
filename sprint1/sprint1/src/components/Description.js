import React from "react";

export default function Description(props) {
  console.log(props);
  return (
    <div className="description">
      <div className="description__display">
        <p className="description__display-text">
          {props.videoInfo.description}
        </p>
      </div>

      {/* number of comments */}
      <div className="number__comments">
          <h3 className="number__comments-text">{props.videoInfo.commentNum}</h3>
      </div>
    </div>
  );
}
