import * as Types from "../actions/types";

const init = {
  user: null,
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_AUTH:
      return {
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
