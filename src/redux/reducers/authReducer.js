import * as Types from "../types";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};
export default authReducer;
