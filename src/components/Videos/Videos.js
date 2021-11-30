import React from "react";
import { connect } from "react-redux";
import classes from "../../styles/Videos.module.css";
import Video from "./Video";
const Videos = ({ videos }) => {
  const video = videos[0] || {};

  return (
    <div className={`${classes.videos__container}`}>
      <Video
        title={video.title}
        thumbnail={video.thumbnail}
        video={video.video}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({ videos: state.videos });
export default connect(mapStateToProps)(Videos);
