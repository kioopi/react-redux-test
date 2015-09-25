import React from 'react';
import { Provider } from 'react-redux';

import store from "./store.js";
import Root from "./cmps/root/connect";

// child of redux provider needs to be a function
// this will change in future version
React.render(
  <Provider store={store}>
    {() => <Root /> }
  </Provider>,
  document.body
);
