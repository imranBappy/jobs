import axios from "axios";
import * as Types from "./types";

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  getFirestore,
} from "firebase/firestore";

export const getUserAction = (page, preUser) => async (dispatch) => {
  const db = getFirestore();

  const usersQuery = query(
    collection(db, "users"),
    orderBy("uid"),
    startAfter("" + page),
    limit(2)
  );

  try {
    const snapshots = await getDocs(usersQuery);
    console.log({ snapshots });
    let users = [];
    snapshots.forEach((doc) => {
      users = [...preUser, doc.data()];
    });
    dispatch({
      type: Types.SET_USER,
      payload: {
        user: users,
        length: users.length,
      },
    });
  } catch (error) {
    console.dir({ error });
    dispatch({
      type: Types.SET_ALERT,
      payload: {
        message: "Server side error",
        error: true,
      },
    });
  }
};
export const userActiveAction =
  (user, index, users, length) => async (dispatch) => {
    try {
      const res = await axios.patch(
        `https://day20.herokuapp.com/user/update-user`,
        user
      );
      if (res.data.error)
        return dispatch({
          type: Types.SET_ALERT,
          payload: {
            message: res.data.message,
            error: res.data.error,
          },
        });

      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: res.data.message,
          error: res.data.error,
        },
      });
      users.splice(index, 1, res.data.user);
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: users,
          length,
        },
      });
    } catch (error) {
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: "Server side error",
          error: true,
        },
      });
    }
  };
