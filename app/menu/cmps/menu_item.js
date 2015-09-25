import React from "react";

import styles from './styles.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.item}>
        {this.props.label}
      </div>
    );
  }
};
