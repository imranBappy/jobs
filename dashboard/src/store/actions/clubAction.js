import axios from "axios";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import fileRename from "../../utils/fileRename";
import * as Types from "./types";
export const clubAction = (news) => async (dispatch) => {
  try {
    const filePost = async (file, name) => {
      const storage = getStorage();
      const filePath = `newsImg/${fileRename(file.name)}`;
      const spaceRef = ref(storage, filePath);
      await uploadBytes(spaceRef, file);
      const url = await fileGet(filePath, "newsImg");
      return url;
    };
    const fileGet = async (filePath, name) => {
      const storage = getStorage();
      const listRef = ref(storage, filePath);
      const url = await getDownloadURL(listRef);
      return url;
    };

    const postVideo = async ({ title, img, text }) => {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "news"), {
        title: title,
        text: text,
        img: img,
      });
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          error: false,
          message: "Successfully video added",
        },
      });
      console.log("Document written with ID: ", docRef.id);
    };
    const img = await filePost(news.img);
    postVideo({ ...news, img: img });
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

export const loadAllClub = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://day20.herokuapp.com/club/get-all-club?page=${page}`
    );
    dispatch({
      type: Types.SET_CLUB,
      payload: {
        club: res.data.club,
        length: res.data.length,
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
