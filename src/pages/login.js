import { useState} from 'react';
import { loginAction } from '../redux/actions/authAction';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
function Login(props) {
  const history = useHistory()
  const [user ,setUser] = useState({});

  const handleChange = e =>{
    let name = e.target.name , value = e.target.value;
    setUser({...user, [name] : value})
  }
  const loginHandle = (e) => {
    props.loginAction(user, history)
    e.preventDefault()

  }
  return (
    <>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" onClick={loginHandle} className="btn btn-primary" >
              Login
            </button>
          </div>
        </form>
        <br />
    </>
  );
}
export default connect(null, {loginAction})(Login)