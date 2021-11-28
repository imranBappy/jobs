import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ children, user, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          !!user.accessToken ? (
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

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
