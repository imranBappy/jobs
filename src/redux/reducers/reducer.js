import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import videosReducer from "./videoReducer";
const { combineReducers } = require("redux");

const reducer = combineReducers({
  alert: alertReducer,
  user: authReducer,
  videos: videosReducer,
});

export default reducer;
