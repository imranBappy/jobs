/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadAllClub } from "../../store/actions/clubAction";
import useQuery from "../../utils/useQuery";
import AddNews from "./AddNews";
const News = (props) => {
  const query = useQuery(useLocation);
  useEffect(() => {
    props.loadAllClub(query.get("page"));
  }, []);

  return (
    <div>
      <h1>News</h1>
      <AddNews />
    </div>
  );
};
const mapStateToProps = (state) => ({
  club: state.club,
});
export default connect(mapStateToProps, { loadAllClub })(News);
