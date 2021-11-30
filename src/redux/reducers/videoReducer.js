import * as Types from "../types";

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case Types.SET_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};
export default videosReducer;
