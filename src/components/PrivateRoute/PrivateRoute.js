/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getAuthAction } from "../../redux/actions/authAction";
const PrivateRoute = ({ children, user, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          !!user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getAuthAction })(PrivateRoute);
