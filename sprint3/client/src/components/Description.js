import React from "react";

export default function Description(props) {
  console.log("description", props.videoInfo);
  if (props.videoInfo.comments === undefined) {
    return <p>comments loading</p>;
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
