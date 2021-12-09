import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import useVideo from "../../hooks/useVideo";
import { alertAction } from "../../store/actions/alertAction";
import { videoAddAction } from "../../store/actions/videoAction";
import InputFile from "../InputFile/InputFile";
import classes from "./AddVideo.module.css";
const InputVideo = (props) => {
  const [input, setInput] = useState({
    title: "",
    video: {},
    thumbnail: {},
  });
  const { postManageVideo, error, loading } = useVideo(
    props.videoAddAction,
    props.alertAction,
    props.videos
  );
  const [url, setURL] = useState({});

  const handleFile = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    setInput({ ...input, [name]: file });
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setURL({ ...url, [name]: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await postManageVideo(input);
  };
  return (
    <div className={classes.video__wrapper}>
      {error && (
        <p style={{ color: "red" }} align="center">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          required
          variant="outlined"
          fullWidth
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          placeholder="Input video title"
        />
        <br />
        <br />
        <div className={classes.file__input_wrap}>
          <InputFile
            url={url}
            onChange={handleFile}
            name="thumbnail"
            title="Upload Thumbnail"
            accept="image/png, image/jpeg"
            label={input.thumbnail ? input.thumbnail.name : ""}
          />
          <br />

          <InputFile
            label={input.video ? input.video.name : ""}
            onChange={handleFile}
            name="video"
            title="Upload Video"
            accept="video/mp4,video/x-m4v,video/*"
            url={url}
          />
        </div>
        <br />
        <input
          className={classes.form__submut_btn}
          disabled={loading ? true : false}
          type="submit"
          value={loading ? "Uploading..." : "Upload"}
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  videos: state.videos,
});

export default connect(mapStateToProps, { videoAddAction, alertAction })(
  InputVideo
);
