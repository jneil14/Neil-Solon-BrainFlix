import React from 'react'
import poster from '../Assets/Images/video-list-0.jpg';
import video from '../Assets/Video/BrainStation Sample Video.mp4';
import axios from "axios";

export default function Hero(props) {
    console.log("hero", props)

    // if (props.currentVideo.image === undefined) {
    //     // return props.image;
    // }
      return (
        <div className="hero">
          <video
            className="hero__video"
            poster={props.currentVideo.image}
            src={video}
            controls
          />
        </div>
      );
}
