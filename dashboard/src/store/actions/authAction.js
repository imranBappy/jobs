import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import decode from "jwt-decode";
import setAuthHeader from "../../utils/setAuthHeader";
import * as Types from "./types";
export const authAction = (user, history) => async (dispatch) => {
  const { email, password } = user;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({
        type: Types.SET_AUTH,
        payload: {
          user: decode(user.accessToken),
        },
      });
      history.push("/");
      setAuthHeader(user.accessToken);
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: "User login successfull!",
          error: false,
        },
      });
      localStorage.setItem("admin-token", user.accessToken);
    })
    .catch((error) => {
      const errorMessage = error.message;
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: errorMessage,
          error: true,
        },
      });
    });
};

export const logoutAction = () => (dispatch) => {
  const auth = getAuth();
  signOut(auth);
  dispatch({
    type: Types.SET_AUTH,
    payload: {
      user: null,
    },
  });
  localStorage.removeItem("admin-token");
};
