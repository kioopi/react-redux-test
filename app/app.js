import React from 'react';
import { Provider, connect } from 'react-redux';

import store from "./store.js";

import EditableGreeting from "./editable_greeting";

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

// Connection EditableGreeting to the Redux store

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

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <App />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

React.render(
  <Root />,
  document.body
);
