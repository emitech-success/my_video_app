import React from "react";
import './VideoItem.css'

const VideoItem =({video, videos, onVideoSelect})=>{
  return(
    <div onClick={()=> onVideoSelect(videos)} className="video_item item">
      <img className="ui image" src={videos.snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
        </div>
    </div>
  )
}


export default VideoItem;