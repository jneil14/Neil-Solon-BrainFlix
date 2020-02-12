import React from 'react'
import poster from '../Assets/Images/video-list-0.jpg';
import video from '../Assets/Video/BrainStation Sample Video.mp4';

export default function Hero() {
    return (
        <div className="hero">
            <video className="hero__video" poster={poster} src={video} controls/>
            
        </div>
    )
}
