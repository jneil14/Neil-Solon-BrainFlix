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

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   axios
  //     .all([
  //       axios.get(
  //         "https://project-2-api.herokuapp.com/videos?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
  //       ),
  //       axios.get(
  //         "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
  //       )
  //     ])
  //     .then(responseArray => {
  //       this.setState({
  //         sideVideos: responseArray[0].data,
  //         mainVideo: responseArray[1].data,
  //         loading: false
  //       });
  //     });
  // }

  // own api
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/api/videos").then(res => {
      console.log("res.data", res.data);
      this.setState({
        sideVideos: res.data,
        mainVideo: res.data[0],
        loading: false
      });
    });
  }

  // publish function
  // handlePublish = event => {
  //   event.preventDefault();

  //   axios
  //     .post("api/videos", {
  //       title: event.target.title.value,
  //       description: event.target.description.value,
  //       imageUrl: event.target.imageUrl.value
  //     })
  //     .then(res => {
  //       this.setState({
  //         videos: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   event.target.reset();
  // };

  fetchVideo = id => {
    axios
      .get(
        // `https://project-2-api.herokuapp.com/videos/${id}?api_key=59903f8f-ba1b-4870-afb2-527d1860f390`
        `/api/videos/${id}`
      )
      .then(res => {
        this.setState({ mainVideo: res.data[0] });
      });
  };

  componentDidUpdate(prevProps) {
    console.log("Home test")
    console.log(this.props)
    console.log(prevProps)
    ///console.log(this.props.routerProps.location.pathname);
    const vidParams = this.props.routerProps.match.params;
    const prevPropsParams = prevProps.routerProps.match.params;
    // just props

    if (vidParams !== prevPropsParams) {
      const vidId = this.props.routerProps.match.params.id;
      this.fetchVideo(vidId);
    }
    //  else if (this.props.routerProps.location.pathname === "/") {
    //   // infinite loop oh no!
    //   console.log("Home");
    //   // console.log("vid id", this.props.mainVideo.id);
    //   this.fetchVideo("1af0jruup5gu");
    // }
  }

  render() {
    if (this.state.sideVideos.length === 0) {
      return <div className="loading__prompt"> Loading...</div>;
    }

    // const videos = this.state.videos.map(video => {
    //   return (
    //     <li key={video.id} className="videos-item">
    //       <h4 className="videos-item__title">{video.title}</h4>
    //       <h4 className="videos-item__channel">{video.channel}</h4>
    //       <img src={video.imageUrl} alt={video.title} />
    //     </li>
    //   );
    // });

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
              <p>Fishing for comments</p>
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
