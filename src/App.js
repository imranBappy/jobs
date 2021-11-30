/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route } from "react-router";
import IsPremium from "./components/IsPremium/IsPremium";
import Layout, {
  Home,
  PricingForm,
  PrivateRoute,
  _Dashboard,
  _Earn,
  _Login,
  _News,
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
        <Route path="/news" component={_News} />

        <PrivateRoute path="/dashboard">
          <_Dashboard />
        </PrivateRoute>

        <PrivateRoute path="/earn">
          <IsPremium path="/earn">
            <_Earn />
          </IsPremium>
        </PrivateRoute>
        <PrivateRoute path="/pricing">
          <PricingForm />
        </PrivateRoute>
      </Layout>
    </>
  );
};

export default App;
