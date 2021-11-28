import React from "react";
import { connect } from "react-redux";
import _Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import _Login from "../../pages/login";
import _Register from "../../pages/register";
import _Reset from "../../pages/reset";
import Alert from "../Alert/Alert";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {!!props.alert.message && <Alert />}
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export { PrivateRoute, Home, _Login, _Register, _Reset, _Dashboard };
const matStateToProps = (state) => ({
  alert: state.alert,
});
export default connect(matStateToProps)(Layout);
