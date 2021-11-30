import React from "react";
import classes from "../../styles/Videos.module.css";
// import "../../utils/videoTracker";
const Video = (props) => {
  const { title = "", video, thumbnail = "" } = props;

  return (
    <div className={`${classes.video__wrap} mt-4`}>
      <h2 className={`my-3`}>{title}</h2>
      <video preload="auto" poster={thumbnail} controls id="video">
        {video && <source src={video} type="video/mp4" />}
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div id="status" className="incomplete">
        <span>Play status: </span>
        <span className="status complete">COMPLETE</span>
        <span className="status incomplete">INCOMPLETE</span>
        <br />
      </div>
      <div>
        <span id="played">0</span> seconds out of
        <span id="duration"></span> seconds. (only updates when the video
        pauses)
      </div>
    </div>
  );
};

export default Video;
