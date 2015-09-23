import React from 'react';
import store from "./store.js";
import Root from "./cmps/root/connect";
import { Provider } from 'react-redux';

// child of redux provider need to be a function
// this will change in future version
React.render(
  <Provider store={store}>
    {() => <Root /> }
  </Provider>,
  document.body
);
