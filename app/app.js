import React from 'react';
import { Provider, connect } from 'react-redux';

import store from "./store.js";

import EditableGreeting from "./editable_greeting";

function mapStateToProps(state)  {
  return {
    value: state.greeting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (value) => dispatch({
      type: 'greet',
      greeting: value
    })
  };
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableGreeting);


React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
