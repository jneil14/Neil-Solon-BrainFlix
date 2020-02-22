import React from "react";
import moment from "moment";

const Comments = props => {
  if (props.comments === undefined) {
    return <h2>Loading!</h2>;
  } else {
    let mappedComments = props.comments.map((comment, index) => {
      return (
        <div key={index} className="comment">
          <div className="comment__image"> </div>

          {/* comment subcontainer without user image  */}
          <div className="comment__sub">
            {/* name and date container */}
            <div className="comment__sub-details">
              <h2 className="comment__sub-name"> {comment.name} </h2>
              <p className="comment__sub-date"> {moment(comment.timestamp).format("MM/DD/YYYY")} </p>
              
            </div>

            {/* comment text */}
            <p className="comment__sub-text"> {comment.comment} </p>
          </div>
        </div>
      );
    });
    return <>{mappedComments}</>;
  }
};

export default Comments;
