import React from 'react'
import Header from './Header'

export default function Upload() {
    return (
      <>
        {Header}
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>

          {/* vid thumbnail container and vid details container holder */}
          <div className="upload__content">
            <h3 className="upload__thumbnail-text">VIDEO THUMBNAIL</h3>
            <img src=" " alt="video thumbnail" />

            {/* end of video thumbnail */}

            {/* upload video details */}
            <div className="upload__details">
              <div className="upload__details-title">
                <h3 className="upload__details-title-text">TITLE YOUR VIDEO</h3>
                <input
                  type="text"
                  className="upload__details-title-input"
                  placeholder="Add a title to your video"
                />
              </div>
              {/* end of upload title */}

              {/* upload description */}
              <div className="upload__details-description">
                <h3 className="upload__details-description-text">
                  ADD A VIDEO DESCRIPTION
                </h3>
                <textarea
                  className="upload__details-description-input"
                  placeholder="Add a description to your video"
                >
                  {" "}
                </textarea>
              </div>
            </div>
            {/*end of video details */}
          </div>
          {/* end of vid thumbnail container and vid details container holder */}


            {/* Publish and Cancel options container */}
          <div className="upload__options">
            <button className="upload__options-publish">PUBLISH</button>
            <button className="upload__options-cancel">CANCEL</button>
          </div>

          
        </div>
      </>
    );
}
