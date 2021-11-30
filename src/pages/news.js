import React from "react";
import Post from "../components/Post/Post";
import classes from "../styles/news.module.css";
const news = () => {
  return (
    <div className={`${classes.new__container}`}>
      <h1>News</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default news;
