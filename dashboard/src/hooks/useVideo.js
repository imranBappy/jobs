import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import "../store/firebase";
import fileRename from "../utils/fileRename";
const useVideo = (videoAddAction, alertAction, preVideo) => {
  const [error, setError] = useState("");
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const filePost = async (file, name) => {
    const storage = getStorage();
    const filePath = `${name}/${fileRename(file.name)}`;
    const spaceRef = ref(storage, filePath);
    try {
      await uploadBytes(spaceRef, file);
      setError("");
      const url = await fileGet(filePath, name);
      return url;
    } catch (error) {
      setError("Something Wrong! Please try again.");
    }
  };

  const fileGet = async (filePath, name) => {
    const storage = getStorage();
    const listRef = ref(storage, filePath);
    try {
      const url = await getDownloadURL(listRef);
      setError("");
      if (name === "thumbnail") {
        return url;
      }
      if (name === "video") {
        return url;
      }
    } catch (error) {
      setError("Something Wrong! Please try again.");
    }
  };

  const postVideo = async ({ title, thumbnail, video }) => {
    if (!!thumbnail === true && !!video === true) {
      const db = getFirestore();
      try {
        const docRef = await addDoc(collection(db, "videos"), {
          title: title,
          video: video,
          thumbnail: thumbnail,
        });
        alertAction({
          error: false,
          message: "Successfully video added",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        setError("Something Wrong! Please try again.");
      }
    }
  };

  const postManageVideo = async (input) => {
    setLoading(true);
    const thumbnail = await filePost(input.thumbnail, "thumbnail");
    const video = await filePost(input.video, "video");
    const newVideo = {
      title: input.title,
      video,
      thumbnail,
    };
    await postVideo(newVideo);
    setVideo((preVideo) => [...preVideo, newVideo]);
    setLoading(false);
  };

  return { postManageVideo, videos, error, loading };
};

export default useVideo;
