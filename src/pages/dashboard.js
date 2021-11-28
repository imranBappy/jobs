import React from "react";
import Many from "../components/Many/Many";
import Pricing from "../components/Pricing/Pricing";
import Profile from "../components/Profile/Profile";

const dashboard = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <Profile />
        </div>
        <div className="col-md-6">
          <Many />
        </div>
      </div>
      <br />
      <br />
      <Pricing />
    </>
  );
};
export default dashboard;
