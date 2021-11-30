import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const IsPremium = ({ children, user, ...rest }) => {
  const users = user || { package: null };
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          !!users.package ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
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

export default connect(mapStateToProps)(IsPremium);
