import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginAction } from "../redux/actions/authAction";
function Login(props) {
  const history = useHistory();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    let name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const loginHandle = (e) => {
    props.loginAction(user, history);
    e.preventDefault();
  };
  return (
    <>
      <h4 className="mb-3">Login you account</h4>
      <form onSubmit={loginHandle}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            required
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <br />

      <div className="row justify-content-md-center">
        <div className="col col-md-6">
          <p>
            Don't have an account? <Link to="/register">Signup</Link> instead.{" "}
          </p>
        </div>
        <div className="col col-md-6">
          <p align="right">
            Forget you password? <Link to="/reset">Reset Password</Link>
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
export default connect(null, { loginAction })(Login);
