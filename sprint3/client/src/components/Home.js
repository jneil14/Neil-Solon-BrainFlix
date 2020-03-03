import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Hero from "./Hero";
import VideoInfo from "./VideoInfo";
import UserInput from "./CommentInput";
import Comments from "./Comments";
import Videos from "./Videos";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
      mainVideo: {},
      loading: false,
      allVideos: []
    };
  }

  // fetches video by id
  fetchVideo = id => {
    axios.get(`http://localhost:5000/api/videos/${id}`)
      .then(res => {this.setState({ mainVideo: res.data[0] });
      });
  };

  // own api
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("http://localhost:5000/api/videos").then(res => {
      this.setState({
        sideVideos: res.data.slice(1, res.data.length),
        mainVideo: res.data[0],
        loading: false,
        allVideos: res.data
      });
    });
  }


  componentDidUpdate(prevProps) {
    const vidParams = this.props.match.params;
    const prevPropsParams = prevProps.match.params;

    if (vidParams !== prevPropsParams) {
      const vidId = this.props.match.params.id;
      this.fetchVideo(vidId);

      // updates sideVideos to return the previous video obj
      let filteredVideos = this.state.allVideos.filter(video => video.id !== vidId);
      this.setState({
        sideVideos: filteredVideos
      });
    }
  }

  render() {
    // preload check
    if (this.state.sideVideos.length === 0) {
      return <div className="donut"> </div>;
    }

    return (
      <>
        <Header />
        <Hero currentVideo={this.state.mainVideo} />
        <div className="video__data-container">
          <div className="video__info-holder">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <UserInput />
            {!this.state.loading ? ( <Comments comments={this.state.mainVideo.comments} />) : 
            ( <p>Fishing for comments</p> )}
          </div>
          <div className="next__videos-holder">
            <Videos videoData={this.state.sideVideos} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
