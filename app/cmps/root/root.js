import React from "react";

import EditableGreeting from "../editable_greeting/connect";
import ArticleList from "../article_list/connect";
import store from "../../store";

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import styles from './styles.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          Header
        </div>

        <div className={styles.main}>
          <ArticleList />
        </div>

        <div className={styles.footer}>
         Menu
        </div>

        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
