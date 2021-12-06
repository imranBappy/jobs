import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import * as Types from "../types";
export const videoGetAction = () => async (dispatch) => {
  let newVideo = [];
  const db = getFirestore();
  try {
    const videosQuery = query(collection(db, "videos"));

    const querySnapshot = await getDocs(videosQuery);
    querySnapshot.forEach((doc) => {
      newVideo = [...newVideo, { ...doc.data(), id: doc.id }];
    });
    const videoIndex = Math.ceil(Math.random() * newVideo.length);
    dispatch({
      type: Types.SET_VIDEOS,
      payload: [newVideo[videoIndex]],
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};

export const incomeAction = (user) => async (dispatch) => {
  try {
    const db = getFirestore();
    const frankDocRef = doc(db, "users", user.id);
    await updateDoc(frankDocRef, {
      balance: Number(user.balance) + 2,
    });
  } catch (error) {
    console.dir({ error });
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: error.message, error: true },
    });
  }
};
