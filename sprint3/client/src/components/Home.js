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
      loading: false
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
        this.setState({
          sideVideos: responseArray[0].data,
          mainVideo: responseArray[1].data,
          loading: false
        });
      });
  }

  fetchVideo = id => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=59903f8f-ba1b-4870-afb2-527d1860f390`
      )
      .then(res => {
        this.setState({ mainVideo: res.data });
      });
  };

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
    // console.log("Updated!", this.props);

    // console.log("current id from url", this.props.routerProps.match.params.id);

    const vidId = this.props.routerProps.match.params.id;
    const prevPropsId = prevProps.routerProps.match.params.id;
    console.log("prevProps.id", prevPropsId);
    console.log(
      " this.props.routerProps.match.params.id",
      this.props.routerProps.match.params.id
    );
    if (
      prevPropsId !== this.props.routerProps.match.params.id &&
      this.props.routerProps.match.params.id !== undefined
    ) {
      this.fetchVideo(vidId);
    } else if (this.props.routerProps.location.pathname === "/") {
      // infinite loop oh no!
      console.log("home");
      // console.log("vid id", this.props.mainVideo.id);
      // this.fetchVideo("1af0jruup5gu");
    }
  }

  render() {
    return (
      <>
        <Header />
        <Hero currentVideo={this.state.mainVideo} />
        <div className="video__data-container">
          <div className="video__info-holder">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <UserInput />
            {!this.state.loading ? (
              <Comments comments={this.state.mainVideo.comments} />
            ) : (
              <p>Loading</p>
            )}
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
