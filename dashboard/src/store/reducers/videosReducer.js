import * as Types from "../actions/types";
const init = {
  videos: [],
  length: 0,
};

const gameReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_VIDEOS:
      return {
        videos: action.payload,
        length: action.payload.length,
      };
    default:
      return state;
  }
};
export default gameReducer;
