import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { SET_ALERT, SET_USER } from "../types";

export const tranxPostAction = (tranx) => async (dispatch) => {
  const db = getFirestore();
  try {
    // const docRef = await addDoc(collection(db, "deposit"), tranx);
    // Create an initial document to update.
    const washingtonRef = doc(db, "deposit", "pC6wAF548YaQECJHmhJQ");

    const result = await updateDoc(washingtonRef, {
      package: "standard",
    });
    console.log(result);
    // console.log(docRef);
  } catch (error) {
    console.dir({ error });
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
    console.dir({ error });
  }
};
