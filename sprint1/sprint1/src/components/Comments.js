import React from "react";


const Comments = ({ comments }) => {
  let mappedComments = comments.map(comment => {
    return (
        <>
            <div className="comment">
                <div className="comment__image"> </div>

            {/* comment subcontainer without user image  */}
            <div className="comment__sub">
                {/* name and date container */}
                <div className="comment__sub-details">
                    <h4 className="comment__sub-name"> {comment.name} </h4>
                    <p className="comment__sub-date"> {comment.date} </p>
                </div>
            

             {/* comment text */}
                <p className="comment__sub-text"> {comment.comment} </p>
            </div>
            </div>
        </>

        
    );
  });

        return (
            <>    
            {mappedComments}     
            </>
  );
};

export default Comments;

