import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import fileName from "../../utils/fineName";
import * as Types from "./types";

export const videoLodeAction = (page) => async (dispatch) => {
  try {
    const db = getFirestore();
    const q = query(collection(db, "videos"));
    const querySnapshot = await getDocs(q);
    let videos = [];
    querySnapshot.forEach((doc) => {
      videos = [...videos, { ...doc.data(), id: doc.id }];
    });
    dispatch({
      type: Types.SET_VIDEOS,
      payload: videos,
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};
export const videoAddAction = (videos) => async (dispatch) => {
  try {
    dispatch({
      type: Types.SET_VIDEOS,
      payload: videos,
    });
  } catch (error) {
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};

export const videoDeleteAction = (video) => async (dispatch) => {
  try {
    console.log(video);

    const storage = getStorage();

    const videoRef = ref(storage, `video/${fileName(video.video)}`);
    await deleteObject(videoRef);
    const thumbnailRef = ref(storage, `thumbnail/${fileName(video.thumbnail)}`);
    await deleteObject(thumbnailRef);
    const db = getFirestore();
    await deleteDoc(doc(db, "videos", video.id));
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        error: false,
        message: "Successfully video deleted",
      },
    });
  } catch (error) {
    console.dir({ error });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};
