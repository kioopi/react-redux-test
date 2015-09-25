import React from "react";

import Tabbar from "../tabbar/connect";
import Sections from "../sections/connect";
import store from "../../store";

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import styles from './styles.css';

export default class extends React.Component {
  render() {

    let sections = this.props.sections.map((item) => {
      return React.createElement(item.cmp);
    });

    return (
      <div className={styles.root + ' ' + this.props.activeSection}>

        <div className={styles.headerContainer}>
          Header
        </div>

        <Sections />

        <div className={styles.footerContainer}>
         <Tabbar />
        </div>

        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
