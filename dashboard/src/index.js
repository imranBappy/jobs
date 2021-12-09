import jwt_decide from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as Types from "./store/actions/types";
import store from "./store/store";
import setAuthToken from "./utils/setAuthHeader";

const token = localStorage.getItem("admin-token");

if (token) {
  const decode = jwt_decide(token);
  store.dispatch({
    type: Types.SET_AUTH,
    payload: {
      user: decode,
    },
  });
} else {
  store.dispatch({
    type: Types.SET_AUTH,
    payload: {
      user: null,
    },
  });
}

setAuthToken(token);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
