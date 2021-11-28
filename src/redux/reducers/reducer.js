import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
const { combineReducers } = require("redux");

const reducer = combineReducers({
  alert: alertReducer,
  user: authReducer,
});

export default reducer;
