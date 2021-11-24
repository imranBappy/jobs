import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
   <Router>
   <Provider store={store} >
        <App />
      </Provider>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
