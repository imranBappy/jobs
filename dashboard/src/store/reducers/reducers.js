import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { alertReducer } from "./alertReducer";
import authReducer from "./authReducer";
import betReducer from "./betReducer";
import depositReducer from "./depositReducer";
import newsReducer from "./newsReducer";
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
  news: newsReducer,
  admin: adminReducer,
  deposit: depositReducer,
  userBet: userBetReducer,
  withdraw: withReducer,
});

export default reducers;
