import React, { Component } from "react";
import _ from "lodash";
import { Container, Row, Col } from "reactstrap";
import API from "./utils/api";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    //call the youtube API
    this.searchYouTube("NF- Only")
  }

  searchYouTube = term => {
    API.searchYouTube(term)
      //capture the return value from the call above
      .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
      .catch(err => console.log(err));
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo }); //!if the same key:value pairs, can be written once ({selectedVideo})
  }

  throttledSearch = _.debounce(this.searchYouTube, 700); //!lodash

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>React Youtube Search</h1>
            <SearchBar searchYouTube={this.throttledSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem
                  video={video}
                  key={video.id.videoId}
                  selectedVideo={this.state.selectedVideo}
                  onVideoSelect={this.onVideoSelect}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;