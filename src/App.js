/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route } from "react-router";
import "./App.css";
import Layout, {
  Home,
  PrivateRoute,
  _Dashboard,
  _Login,
  _Register,
  _Reset,
} from "./components/Layout/Layout";
const App = () => {
  return (
    <>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={_Register} />
        <Route path="/login" component={_Login} />
        <Route path="/reset" component={_Reset} />

        <PrivateRoute path="/dashboard">
          <_Dashboard />
        </PrivateRoute>
      </Layout>
    </>
  );
};

export default App;
