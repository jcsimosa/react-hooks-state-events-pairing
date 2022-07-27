import { useState } from "react";
import video from "../data/video.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {
  
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <h5>{video.views}: Views | Uploaded {video.createdAt}</h5>
      <Buttons video={video} />
      <Comments video={video} />
     


    </div>
  )
}

export default App;
