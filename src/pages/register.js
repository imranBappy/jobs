import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Register from "../components/Register/Register";
import { alertAction } from "../redux/actions/alertAction";
import fromValidator from "../utils/registerError";
import { registerAction } from "./../redux/actions/authAction";
function Register_(props) {
  const history = useHistory();
  const [user, setUser] = useState({ ref: "60ea8db5fcabd2314dca0777" });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    if (name === "email" || name === "username") {
      setUser({ ...user, [name]: value.toLowerCase() });
    } else {
      setUser({ ...user, [name]: value });
    }
    fromValidator(name, value, user, error, setError);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(user).length === 0)
      setError({
        name: "Must be at least 3 characters",
        email: "Invalid Email",
        password: "Must be at least 6 characters",
        confirmPassword: "Must be at least 6 characters",
      });

    let isValid = true;
    for (const key in error) {
      if (error[key]) isValid = false;
    }
    if (Object.keys(user).length > 4 && isValid) {
      delete user.confirmPassword;
      props.registerAction(user, history);
      setError({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      props.alertAction({
        message: "Please Input valid data!",
        error: true,
      });
    }
  };
  return (
    <>
      <Register
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
const mapStateToProps = (state) => ({ alert: state.alert });
export default connect(mapStateToProps, { alertAction, registerAction })(
  Register_
);
