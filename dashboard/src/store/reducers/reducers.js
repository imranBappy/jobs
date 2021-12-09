import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { alertReducer } from "./alertReducer";
import authReducer from "./authReducer";
import betReducer from "./betReducer";
import clubReducer from "./clubReducer";
import depositReducer from "./depositReducer";
import userBetReducer from "./userBetReducer";
import userReducer from "./userReducer";
import videosReducer from "./videosReducer";
import withReducer from "./withReducer";

const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  videos: videosReducer,
  user: userReducer,
  bet: betReducer,
  club: clubReducer,
  admin: adminReducer,
  deposit: depositReducer,
  userBet: userBetReducer,
  withdraw: withReducer,
});

export default reducers;
