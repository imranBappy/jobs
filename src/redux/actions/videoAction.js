import { query } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import * as Types from "../types";

export const videoGetAction = () => async (dispatch) => {
  let newVideo = [];
  const db = getFirestore();
  try {
    const q = query(collection(db, "videos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      newVideo = [...newVideo, doc.data()];
      return dispatch({
        type: Types.SET_VIDEOS,
        payload: newVideo,
      });
    });
  } catch (error) {
    console.dir({ error });
  }
};
