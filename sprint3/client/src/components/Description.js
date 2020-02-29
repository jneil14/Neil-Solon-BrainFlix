import React from "react";

export default function Description(props) {
  if (props.videoInfo.comments === undefined) {
    return <p>Loading Video Information</p>;
  }
  return (
    <div className="description">
      <div className="description__display">
        <p className="description__display-text">
          {props.videoInfo.description}
        </p>
      </div>

      {/* number of comments */}
      <div className="number__comments">
        <h2 className="number__comments-text">
          {props.videoInfo.comments.length} Comments
        </h2>
      </div>
    </div>
  );
}
