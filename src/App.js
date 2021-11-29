/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route } from "react-router";
import Layout, {
  Home,
  PrivateRoute,
  _Dashboard,
  _Earn,
  _Login,
  _Register,
  _Reset,
} from "./components/Layout/Layout";
import "./styles/App.css";
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
        <PrivateRoute earn={false} path="/earn">
          <_Earn />
        </PrivateRoute>
      </Layout>
    </>
  );
};

export default App;
