import * as Types from "../types";

const init = {
  user: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};
export default authReducer;
