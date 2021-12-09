import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { clubAction } from "../../store/actions/clubAction";

const AddNews = (props) => {
  const [news, setNews] = useState({
    title: "",
    img: "",
    text: "",
  });
  const [error, setError] = useState({
    message: "",
    error: false,
  });

  const handelChange = (e) => {
    let name = e.target.name,
      value = e.target.value;
    setNews({ ...news, [name]: value });

    if (name === "name") {
      if (value.length > 2) {
        setError({
          message: "",
          error: false,
        });
      } else {
        setError({
          message: "Invalid Name",
          error: true,
        });
      }
    }
  };

  const handelSubmit = () => {
    for (const key in news) {
      const value = news[key];
      if (!value) {
        setError({
          message: "Please fill up this form",
          error: true,
        });
      } else {
        setError({
          message: "",
          error: false,
        });
      }
    }

    if (!error.error) {
      props.clubAction(news);
      console.log(news);
    }
  };

  const handleText = (e) => {
    setNews({ ...news, text: e.target.value });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    setNews({ ...news, img: file });
  };
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            onChange={handelChange}
          />
          <input type="file" name="img" onChange={handleFile} />
          <br />
          <br />

          <textarea
            id="w3review"
            name="w3review"
            value={news.text}
            rows="4"
            cols="50"
            onChange={handleText}
          ></textarea>
          {error.error && <p style={{ color: "red" }}>{error.message}</p>}
          <Button
            style={{ marginTop: "20px" }}
            fullWidth
            color="primary"
            variant="contained"
            onClick={handelSubmit}
          >
            {" "}
            {"Add question"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, { clubAction })(AddNews);
