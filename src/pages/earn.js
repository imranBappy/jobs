/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "../components/Post/Post";
import Videos from "../components/Videos/Videos";
import { videoGetAction } from "../redux/actions/videoAction";
import classes from "../styles/earn.module.css";
const Earn = (props) => {
  useEffect(() => {
    props.videoGetAction();
  }, []);
  return (
    <div className={classes.earn__container}>
      <h4>Videos</h4>
      <Videos videos={props.videos} />
      <h4 className="mt-4">Ads</h4>
      <Post />
    </div>
  );
};

const mapStateToProps = (state) => ({ videos: state.videos });
export default connect(mapStateToProps, { videoGetAction })(Earn);
