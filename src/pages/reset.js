import React, { useState } from "react";
import { connect } from "react-redux";
import { resetAction } from "../redux/actions/authAction";
const Reset = (props) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.resetAction(email);
  };
  return (
    <>
      <h4 className="mb-3">Reset you password</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default connect(null, { resetAction })(Reset);
