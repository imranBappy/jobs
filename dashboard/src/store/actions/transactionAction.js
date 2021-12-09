import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
} from "@firebase/firestore";
import axios from "axios";
import * as Types from "./types";
export const allTransactionGetAction =
  (page, transaction) => async (dispatch) => {
    const db = getFirestore();
    const transactionQuery = query(
      collection(db, "deposit"),
      orderBy("package"),
      startAfter("" + 0),
      limit(2)
    );
    // createdAt
    try {
      if (transaction === "deposit") {
        console.log(111, { transaction });
        const snapshots = await getDocs(transactionQuery);
        let deposit = [];
        snapshots.forEach((doc) => {
          deposit = [...deposit, { ...doc.data(), id: doc.id }];
        });
        console.log(deposit);
        dispatch({
          type: Types.SET_DEPOSIT,
          payload: {
            transaction: deposit,
            length: 10,
          },
        });
      }
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

export const transactionAcceptAction =
  (transaction, index, rows, length, status, path) => async (dispatch) => {
    try {
      if (transaction.status === status)
        return dispatch({
          type: Types.SET_ALERT,
          payload: {
            message: `Al ready transaction ${status}`,
            error: false,
          },
        });
      const updateTransaction = await axios.patch(
        `https://day20.herokuapp.com/transaction/update-transaction/${transaction._id}?status=${transaction.status}&userId=${transaction.user._id}`
      );
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: updateTransaction.data.message,
          error: updateTransaction.data.error,
        },
      });
      rows.splice(index, 1, updateTransaction.data.transaction);
      dispatch({
        type: path === "/withdraw" ? Types.SET_WITHDRAW : Types.SET_DEPOSIT,
        payload: {
          transaction: rows,
          length,
        },
      });
    } catch (error) {
      dispatch({
        type: Types.SET_ALERT,
        payload: {
          message: "There was a server error",
          error: true,
        },
      });
    }
  };
