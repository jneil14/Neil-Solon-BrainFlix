import React from 'react'
import userImage from '../Assets/Images/Mohan-muruge.jpg';

function CommentInput () {

    return (
        <div className="input">
            <p className="input__title">JOIN THE CONVERSATION</p>
            <div className="input__use">
                <img className="input__use-pic" src={userImage}  alt="user" />
                <div className="input__use-box">
                    <input type="text" className="input__use-text" />
                    <button className="input__use-button">COMMENT</button>
                </div>
                
            </div>
        </div>
    )
}

export default CommentInput;