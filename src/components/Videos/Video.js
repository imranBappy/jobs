import React, { useState } from "react";
import { connect } from "react-redux";
import { incomeAction, videoGetAction } from "../../redux/actions/videoAction";
import classes from "../../styles/Videos.module.css";
const Video = (props) => {
  const { title = "", video, thumbnail = "" } = props;

  const [timeStarted, setTimeStarted] = useState(-1);
  const [timePlayed, setTimePlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState(false);
  const [complete, setComplete] = useState(false);
  const videoStartedPlaying = (e) => {
    const videoTag = e.target;
    setTimeStarted(new Date().getTime() / 1000);
    if (!status) {
      setDuration(videoTag.duration);
    }
    setStatus(true);
  };
  const videoStoppedPlaying = (videoTag) => {
    if (timeStarted > 0) {
      var playedFor = new Date().getTime() / 1000 - timeStarted;
      setTimeStarted(-1);
      setTimePlayed(timePlayed + playedFor);
    }
    if (timePlayed + playedFor >= duration && videoTag.type === "ended") {
      setComplete(true);
      props.incomeAction(props.user);
    }
  };
  return (
    <div className={`${classes.video__wrap} mt-4`}>
      <h2 className={`my-3`}>{title}</h2>
      <video
        preload="auto"
        poster={thumbnail}
        onEnded={videoStoppedPlaying}
        onPlaying={videoStartedPlaying}
        onPlay={videoStartedPlaying}
        controls
        id="video"
      >
        {video && <source src={video} type="video/mp4" />}
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div id="status" className="incomplete">
        <span>Play status: </span>

        {complete ? (
          <span className="status complete">COMPLETE</span>
        ) : (
          <span className="status incomplete">INCOMPLETE</span>
        )}

        <br />
      </div>

      <div>
        <button className="btn btn-dark my-3" onClick={props.videoGetAction}>
          Next Video
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { videoGetAction, incomeAction })(
  Video
);
