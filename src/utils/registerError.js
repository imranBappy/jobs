import validateEmail from "../utils/validateEmail";
const fromValidator = (name, value, user, error, setError) => {
  switch (name) {
    case "name":
      if (value.length > 2 && value.length < 20) {
        setError({ ...error, name: "" });
      } else {
        setError({ ...error, name: "Must be at least 3 characters" });
      }
      break;
    case "email":
      if (validateEmail(value)) {
        setError({ ...error, email: "" });
      } else {
        setError({ ...error, email: "Invalid Email" });
      }
      break;
    case "username":
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      if (usernameRegex.test(value)) {
        if (value.length > 4 && value.length < 20) {
          setError({ ...error, username: "" });
        } else {
          setError({ ...error, username: "Invalid Username" });
        }
      } else {
        setError({ ...error, username: "Invalid Username" });
      }
      break;
    case "password":
        if (value.length > 5) {
            setError({...error, password :''})
        }else{
            setError({...error, password : 'Must be at least 6 characters'})
        }
      break;
    case "confirmPassword":
        if (user.password === value) {
            setError({...error, confirmPassword : ''})
        }else{
            setError({...error, confirmPassword : 'Password Don\'t match'})
        }
      break;
    default:
        setError({...error, [name]: ''})
      break;
  }
};
export default fromValidator;
