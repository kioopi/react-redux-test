import React from "react";

import styles from './styles.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.article}>
        <h3>{this.props.data.title}</h3>
        <img src={this.props.data.image.url} />
        <p>{this.props.data.text}</p>
      </div>
    );
  }
};
