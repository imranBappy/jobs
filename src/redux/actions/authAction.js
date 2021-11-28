import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "../firebase";
import * as Types from "../types";

export const registerAction = (user, history) => async (dispatch) => {
  const auth = getAuth();
  const { email, password, name } = user;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const currentUser = auth.currentUser;
    const db = getFirestore();
    await addDoc(collection(db, "users"), {
      uid: currentUser.uid,
      name,
      email,
      balance: 0,
      ref: [],
      package: null,
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Successfully Signup!",
        error: false,
      },
    });
    dispatch({
      type: Types.SET_USER,
      payload: {
        user: { ...currentUser, balance: 0, ref: [], package: null },
      },
    });
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: err.message, error: true },
    });
  }
};

export const loginAction = (user, history) => async (dispatch) => {
  const { email, password } = user;
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;
    dispatch({
      type: Types.SET_USER,
      payload: {
        user: currentUser,
      },
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Login successfull!",
        error: false,
      },
    });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};
export const resetAction = (email) => async (dispatch) => {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Please check you email",
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  const auth = getAuth();
  await signOut(auth);
  dispatch({
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  });
  dispatch({
    type: Types.SET_ALERT,
    payload: {
      message: "Logout successfully",
      error: false,
    },
  });
};
export const changePassAction = (pass) => async (dispatch) => {
  try {
    const result = await axios.put("/user/login", pass);
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }

    dispatch({
      type: Types.SET_USER,
      payload: {
        auth: false,
        user: {},
        token: "",
      },
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: result.data.message,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Server Error",
        error: false,
      },
    });
  }
};
export const getAuthAction = (req, res) => async (dispatch) => {
  const auth = getAuth();
  try {
    const db = getFirestore();
    const citiesRef = collection(db, "users");

    const getUsers = async (newUser) => {
      // console.log(111, newUser.uid);
      // where("uid", "==", newUser.uid)
      const stateQuery = query(citiesRef, where("uid", "==", newUser.uid));
      try {
        const querySnapshot = await getDocs(stateQuery);
        querySnapshot.forEach((doc) => {
          // console.log({ ...doc.data() });
          dispatch({
            type: Types.SET_USER,
            payload: {
              user: { ...doc.data(), ...newUser },
            },
          });
        });
      } catch (error) {
        console.dir({ error });
        dispatch({
          type: Types.SET_ALERT,
          payload: { message: error.message, error: true },
        });
      }
    };
    onAuthStateChanged(auth, async (user) => {
      await getUsers(user);
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};
