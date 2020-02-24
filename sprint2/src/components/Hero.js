import React from 'react'
import video from '../Assets/Video/BrainStation Sample Video.mp4';

export default function Hero(props) {
    console.log("hero", props)

      return (
        <div className="hero">
          <video className="hero__video" poster={props.currentVideo.image} src={video} controls  />
        </div>
      );
}
