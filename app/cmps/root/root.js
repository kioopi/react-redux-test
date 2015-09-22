import React from "react";
import { Provider } from 'react-redux';

import EditableGreeting from "../editable_greeting/connect";
import store from "../../store";

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import styles from './styles.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.root}>

        <Provider store={store}>
          {() => <EditableGreeting />}
        </Provider>

        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>

      </div>
    );
  }
}
