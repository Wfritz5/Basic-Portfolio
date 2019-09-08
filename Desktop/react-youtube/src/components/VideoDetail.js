import React from "react";
//!pulling props.selectedVideo off into the const name 'selectedVideo' -- a shortcut for objectDestructuring
const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) return <h2>Loading...</h2>; //!font awesome  find a loading spinner

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    console.log(videoUrl);
    console.log(selectedVideo);
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;