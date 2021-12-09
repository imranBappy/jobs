import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import "../firebase";
import * as Types from "./types";
export const adminAddAction = (admin) => async (dispatch) => {
  const { name, email, password } = admin;
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;
    await updateProfile(currentUser, { displayName: name });
    const db = getFirestore();
    await addDoc(collection(db, "admins"), {
      id: currentUser.uid,
      name,
      email,
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Register Successfully!",
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: error.message,
        error: true,
      },
    });
  }
};

export const loadAdminAction = () => async (dispatch) => {
  try {
    const db = getFirestore();
    let admins = [];
    const querySnapshot = await getDocs(collection(db, "admins"));
    querySnapshot.forEach((doc) => {
      admins = [...admins, doc.data()];
    });
    dispatch({
      type: Types.SET_ADMIN,
      payload: {
        admin: admins,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: error.message,
        error: true,
      },
    });
  }
};

export const adminDeleteAction = (admin) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://day20.herokuapp.com/admin/delete?_id=${admin._id}`
    );
    dispatch({
      type: Types.SET_ADMIN,
      payload: {
        admin: res.data.data,
      },
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Admin Successfully deleted",
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Server was a side error",
        error: true,
      },
    });
  }
};

export const adminEditAction = (admin) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://day20.herokuapp.com/admin/change?_id=${admin._id}&admin=${
        admin.isAdmin ? 0 : 1
      }`
    );
    dispatch({
      type: Types.SET_ADMIN,
      payload: {
        admin: res.data.data,
      },
    });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Admin Successfully deleted",
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Server was a side error",
        error: true,
      },
    });
  }
};
