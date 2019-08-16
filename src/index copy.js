import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import ReduxApp from './page/ReduxApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


let initialStore = { };

const store = createStore(
  rootReducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  
  <Provider store={store}>
    <ReduxApp/>
  </Provider>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
    