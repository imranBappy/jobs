/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { videoLodeAction } from "../../store/actions/videoAction";
import useQuery from "../../utils/useQuery";
import AddVideo from "./AddVideo";
import classes from "./video.module.css";
import VideoList from "./VideoList";
const Videos = (props) => {
  let query = useQuery(useLocation);
  const { videos } = props.videos;
  const page = Number(query.get("page")) || 0;
  useEffect(() => {
    console.log(page);
    props.videoLodeAction();
  }, []);

  return (
    <>
      <AddVideo />
      <br />
      <br />
      <div className={classes.video__wrapper}>
        {videos.map((video) => (
          <VideoList key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  videos: state.videos,
});

export default connect(mapStateToProps, { videoLodeAction })(Videos);
