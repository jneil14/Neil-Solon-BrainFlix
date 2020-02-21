import React from "react";
import { Link } from "react-router-dom";

export default function Videos({ videoData }) {
  console.log("videosD", videoData);
  if (videoData === undefined) {
    return <h3 className="video__loading"> Loading Videos...</h3>;
  } else {
    let mappedVideos = videoData
      .filter((vid, index) => {
        if (index !== 0) {
          return vid;
        }
      })
      .map((vid, index) => {
        console.log(vid.id);
        return (
          <Link to={`/videos/${vid.id}`} key={vid.id}>
            <div key={index} className="video">
              {/* container for video data */}
              <div className="video__data">
                <img className="video__data-actual" src={vid.image} />
                <div className="video__data-info">
                  <h4 className="video__data-title"> {vid.title}</h4>
                  <h4 className="video__data-channel"> {vid.channel} </h4>
                </div>
              </div>
            </div>
          </Link>
        );
      });

    return (
      <>
        <p className="video__title">NEXT VIDEO</p>
        {mappedVideos}
      </>
    );
  }
}

// let mappedVideos = props.video
//   .filter((vid, i) => {
//     if (i !== 0) {
//       return vid;
//     }
//   })
//   .map((video, index) => {
//     return (
// <Link to={`/videos/${video.id}`}>
//       <div key={index} className="video">
//         {/* container for video data */}
//         <div className="video__data">
//           <img className="video__data-actual" src={video.image} />
//           <div className="video__data-info">
//             <h4 className="video__data-title"> {video.title}</h4>
//             <h4 className="video__data-channel"> {video.channel} </h4>
//           </div>
//         </div>
//       </div>
// {/* </Link> */}
//     );
//   });
