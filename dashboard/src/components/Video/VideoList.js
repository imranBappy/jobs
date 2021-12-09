import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { videoDeleteAction } from "../../store/actions/videoAction";
import classes from "./video.module.css";
const VideoList = (props) => {
  const { thumbnail } = props.video;
  return (
    <>
      <div className={classes.video}>
        <img src={thumbnail} alt={"title"} />
        <p>{`This is video titlw`}</p>
        <div className={classes.qmeta}>
          <Button
            variant="outlined"
            onClick={() => props.videoDeleteAction(props.video)}
            color="secondary"
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default connect(null, { videoDeleteAction })(VideoList);
