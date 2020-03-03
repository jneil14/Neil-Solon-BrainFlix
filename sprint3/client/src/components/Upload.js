import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import vidThumbNail from "../BrainFlix-Sprint-1 3/Assets/Images/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/videos").then(res => {
      this.setState({
        videos: res.data
      });
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    axios.post("http://localhost:5000/api/videos", {
      
        title: event.target.title.value,
        channel: "The Flash",
        description: event.target.description.value,
        image: event.target.image.value
      })
      .then(res => {
        this.setState({
          videos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    event.target.reset();
  };



  render() {

    return (
      <>
        {<Header />}
        <form className="upload__container" onSubmit={this.handleFormSubmit}>
          <div className="upload">
            <h1 className="upload__title">Upload Video</h1>

            {/* vid thumbnail container and vid details container holder */}
            <div className="upload__content">
              <div className="upload__thumbnail">
                <h3 className="upload__thumbnail-text">VIDEO THUMBNAIL</h3>
                <img
                  className="upload__thumbnail-image"
                  src={vidThumbNail}
                  alt="video thumbnail"
                />
              </div>
              {/* end of video thumbnail */}


              {/* upload video details */}
              <div className="upload__details">
                <div className="upload__details-title">
                  <h3 className="upload__details-title-text">
                    TITLE YOUR VIDEO
                  </h3>
                  <input
                    name="title"
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
                    name="description"
                    type="text"
                    className="upload__details-description-input"
                    placeholder="Add a description to your video"
                  ></textarea>
                </div>
                {/* end of upload description */}
                <div className="upload__details-image">
                  <h3 className="upload__details-image-text">
                    ADD AN IMAGE URL
                  </h3>
                  <textarea
                    name="image"
                    type="text"
                    className="upload__details-image-input"
                    placeholder="Add image URL here"
                  ></textarea>
                </div>
              </div>
            </div>
            {/*end of video details */}
          </div>
          {/* end of vid thumbnail container and vid details container holder */}


          {/* Publish and Cancel options container */}
          <div className="upload__options">
            <button className="upload__options-publish">PUBLISH</button>

            <button className="upload__options-cancel">
              CANCEL
            </button>
          </div>
        </form>
      </>
    );
  }
}

  export default Upload;