import React from "react";
import userImage from "../Assets/Images/Mohan-muruge.jpg";

function CommentInput() {
  return (
    <div className="input">
      <h4 className="input__title">JOIN THE CONVERSATION</h4>
      <div className="input__use">
        <div className="input__use-pic"> </div>

        <div className="input__use-box">
          <textarea className="input__use-text" placeholder="Add a new comment">
          </textarea>
          <button className="input__use-button">COMMENT</button>
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
