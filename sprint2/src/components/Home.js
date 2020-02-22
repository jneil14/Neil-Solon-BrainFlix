import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
// import userImage from "./Assets/Images/Mohan-muruge.jpg";
// import video from "./Assets/Video/BrainStation Sample Video.mp4";
import VideoInfo from "./VideoInfo";
import UserInput from "./CommentInput";
import Comments from "./Comments";
import Videos from "./Videos";
import Upload from "./Upload";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
      mainVideo: {}
      // loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .all([
        axios.get(
          "https://project-2-api.herokuapp.com/videos?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
        ),
        axios.get(
          "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
        )
      ])
      .then(responseArray => {
        console.log("response array", responseArray);
        this.setState({
          sideVideos: responseArray[0].data,
          mainVideo: responseArray[1].data
          // loading: false
        });
      });
  }

  fetchVideo = id => {
    console.log("fetch video", id);
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=59903f8f-ba1b-4870-afb2-527d1860f390`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ mainVideo: res.data });
      });

    // make axios get request for video
    // update state of video
  };

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
    console.log("Updated!", this.props);

    console.log("current id from url", this.props.routerProps.match.params.id);

    const vidId = this.props.routerProps.match.params.id;
    const prevPropsId = prevProps.routerProps.match.params.id;
    if (prevPropsId !== this.props.routerProps.match.params.id) {
      this.fetchVideo(vidId);
    }

    //

    //     // axios.get(
    //     //   "https://project-2-api.herokuapp.com/videos/{vidId}?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
    //     // );
    // }
  }

  render() {
    return (
      <>
        <Header />
        <Hero currentVideo = {this.state.mainVideo} />
        <div className="video__data-container">
          <div className="video__info-holder">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <UserInput />
            {/* {!this.state.loading ? ( */}
            <Comments comments={this.state.mainVideo.comments} />
            {/* ) : (
              <p>Loading</p>
            )} */}
          </div>
          <div className="next__videos-holder">
            <Videos videoData={this.state.sideVideos} />
            {console.log("side vids", this.state.sideVideos)}
          </div>
        </div>
      </>
    );
  }
}

export default Home;

{
  /* <Route
  path="/images/:id"
  render={props => {
    console.log(props.match.params.id);
    const image = this.state.images.find(image => {
      return props.match.params.id === image.id;
    });
    return <ImageDetails title={image.title} url={image.url} />;
  }}
/>; */
}
