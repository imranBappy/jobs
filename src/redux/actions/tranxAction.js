import {
  addDoc,
  collection,
  doc,
  getFirestore,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { SET_ALERT, SET_USER } from "../types";

export const tranxPostAction = (tranx) => async (dispatch) => {
  const db = getFirestore();
  try {
    // Timestamp.fromDate(new Date("December 10, 1815")),
    await addDoc(collection(db, "deposit"), {
      ...tranx,
      createdAt: Timestamp.fromDate(new Date("December 10, 1815")),
    });
    dispatch({
      type: SET_ALERT,
      payload: { message: "Successfully Send!", error: false },
    });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};
export const basicSubscribAction = (user) => async (dispatch) => {
  try {
    const db = getFirestore();
    const washingtonRef = doc(db, "users", user.id);
    await updateDoc(washingtonRef, {
      package: "basic",
    });
    dispatch({
      type: SET_USER,
      payload: {
        user: {
          ...user,
          package: "basic",
        },
      },
    });
    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Successfully Updated!",
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: {
        message: error.message,
        error: true,
      },
    });
  }
};
