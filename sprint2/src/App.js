import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import userImage from "./Assets/Images/Mohan-muruge.jpg";
// import video from "./Assets/Video/BrainStation Sample Video.mp4";
// import VideoInfo from "./components/VideoInfo";
// import UserInput from "./components/CommentInput";

// import Videos from "./components/Videos";
// import Comments from "./components/Comments";
import Upload from "./components/Upload";
import Home from "./components/Home";

class App extends Component {
  //   let comments = [{
  //     name: 'Michael Lyons',
  //     comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  //     date: '12/18/2018'
  //   },
  //     {
  //       name: 'Gary Wong',
  //       comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
  //       date: '12/18/2018'
  //     },
  //     {
  //       name: 'Theodore Duncan',
  //       comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
  //       date: '11/15/2018'
  //     }];

  //   let description = "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time-- eight years after his first Red Cow Rampage title";

  //   let numsComment = "3 Comments";

  //   let videoData = [
  //     {
  //       id: "1af0jruup5gu",
  //       title: "BMX Rampage: 2018 Highlights",
  //       channel: "Red Cow",
  //       image: "https://i.imgur.com/l2Xfgpl.jpg"
  //     },
  //     {
  //       id: "1ainjruutd1j",
  //       title: "Become A Travel Pro In One Easy Lesson",
  //       channel: "Todd Welch",
  //       image: "https://i.imgur.com/5qyCZrD.jpg"
  //     },
  //     {
  //       id: "1aivjruutn6a",
  //       title: "Les Houches The Hidden Gem Of The Chamonix",
  //       channel: "Cornelia Blair",
  //       image: "https://i.imgur.com/yFS8EBr.jpg"
  //     },
  //     {
  //       id: "1a3cjruucpf7",
  //       title: "Travel Health Useful Medical Information For",
  //       channel: "Glen Harper",
  //       image: "https://i.imgur.com/MMDMgD7.jpg"
  //     },
  //     {
  //       id: "1am3jruuwagz",
  //       title: "Cheap Airline Tickets Great Ways To Save",
  //       channel: "Emily Harper",
  //       image: "https://i.imgur.com/ibLw5q5.jpg"
  //     },
  //     {
  //       id: "1akljruuvhzt",
  //       title: "Take A Romantic Break In A Boutique Hotel",
  //       channel: "Ethan Owen",
  //       image: "https://i.imgur.com/7rD6Mf6.jpg"
  //     },
  //     {
  //       id: "1ae5jruuoc4q",
  //       title: "Choose the Perfect Accommodations",
  //       channel: "Lydia Perez",
  //       image: "https://i.imgur.com/0hi3N4B.jpg"
  //     },
  //     {
  //       id: "1a4kjruuedd9",
  //       title: "Cruising Destination Ideas",
  //       channel: "Timothy Austin",
  //       image: "https://i.imgur.com/DDJNZNw.jpg"
  //     },
  //     {
  //       id: "1a8qhruuzky3",
  //       title: "Train Travel On Track For Safety",
  //       channel: "Scotty Cranmer",
  //       image: "https://i.imgur.com/i6S8m7I.jpg"
  //     }
  //   ];

  //   const mainVideo = {
  //     id: "type of <string>",
  //     title: "BMX Rampage: 2018 Highlights",
  //     description:
  //       "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  //     channel: "By Red Cow",
  //     image: userImage,
  //     views: "1,001,023",
  //     likes: "110,985",
  //     duration: "0:00 / 0:42",
  //     video: video,
  //     timestamp: "12/18/2018",
  //     description: description,
  //     comments: comments,
  //     commentNum: numsComment
  //   };

  //   const sideVideo = {
  //     id: 'type of <string>',
  //     title: 'type of <string>',
  //     channel: 'type of <string>',
  //     image: 'type of <string>'
  // };

  // state = {
  //   sideVideos: [],
  //   mainVideo: {}
  //   // loading: false
  // };

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
  //       console.log("response array", responseArray);
  //       this.setState({
  //         sideVideos: responseArray[0].data,
  //         mainVideo: responseArray[1].data
  //         // loading: false
  //       });
  //     });
  // axios
  //   .get(
  //     "https://project-2-api.herokuapp.com/videos?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
  //   )
  //   .then(response => {
  //     const sideVideos = response.data;
  //     console.log("side vids", sideVideos);

  //     axios
  //       .get(
  //         "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=59903f8f-ba1b-4870-afb2-527d1860f390"
  //       )
  //       .then(response => {
  //         console.log("res", response);
  //         const mainVideo = response.data;
  //         console.log("main vid", mainVideo);
  //         this.setState({
  //           sideVideos,
  //           mainVideo: mainVideo
  //         });
  //       })
  //       .catch(err => console.log(err));
  //   });
  // }

  render() {
    return (
      <Router>
        <Header />
        <Hero />

        <Switch>
          <Route
            path="/"
            render={routerProps => {
              return <Home routerProps={routerProps} />;
            }}
            exact
          />
          <Route path="/upload" component={Upload} />
          <Route
            path="/video/:id"
            render={routerProps => {
              return <Home routerProps={routerProps} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

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
