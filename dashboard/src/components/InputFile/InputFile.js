import React from "react";
import classes from "./InputFile.module.css";
const InputFile = ({
  label,
  name,
  title,
  accept = "image/png, image/jpeg",
  url,
  ...rest
}) => {
  return (
    <div className={classes.input__file}>
      <label className={classes.input__file_label} htmlFor={name}>
        {name === "thumbnail" ? (
          <>
            {url.thumbnail ? (
              <img
                className={classes.thumbnail__img}
                src={url.thumbnail}
                alt="upload_file"
              />
            ) : (
              <span className="material-icons-outlined">upload_file</span>
            )}
          </>
        ) : (
          <>
            {url.video ? (
              <video
                className={classes.input__video}
                width="320"
                height="240"
                controls
              >
                <source src={url.video} type="video/mp4" />
              </video>
            ) : (
              <span className="material-icons-outlined">upload_file</span>
            )}
          </>
        )}
      </label>
      <input
        required
        {...rest}
        type="file"
        id={name}
        name={name}
        accept={accept}
      />
      <h5>{label ? label : title}</h5>
    </div>
  );
};

export default InputFile;
