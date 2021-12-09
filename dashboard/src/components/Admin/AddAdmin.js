import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { adminAddAction } from "../../store/actions/adminAction";
const AddAdmin = (props) => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);

  const checkValid = () => {
    for (const key in admin) {
      const element = admin[key];
      if (key !== "isAdmin") {
        if (!element) {
          setIsValid(false);
          return false;
        }
      }
    }
    return true;
  };

  const handelChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    if (name === "isAdmin") {
      setAdmin({ ...admin, isAdmin: !admin.isAdmin });
    } else {
      setAdmin({ ...admin, [name]: value });
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (checkValid()) {
      props.adminAddAction(admin)
    }
  };
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <form onSubmit={handelSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              onChange={handelChange}
            />
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              onChange={handelChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              onChange={handelChange}
            />

            <Button
              type="submit"
              style={{ marginTop: "20px" }}
              fullWidth
              color="primary"
              variant="contained"
            >
              Register
            </Button>
          </form>
          {!isValid && (
            <p style={{ color: "red" }}>Please Fill Up This Form!</p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, { adminAddAction })(AddAdmin);
