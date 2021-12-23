import * as Types from "../actions/types";
const init = {
  news: [],
  length: 0,
};
const newsReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_NEWS:
      return {
        news: action.payload.news,
        length: action.payload.length,
      };
    default:
      return state;
  }
};
export default newsReducer;
