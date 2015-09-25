import React from "react";

import Textinput from '../textinput/textinput.js';
import Greeting from '../greeting/greeting.js';

// import classnames from css file
import styles from './style.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.editableGreeting}>
        <Greeting name={this.props.value} />
        <Textinput onChange={this.props.onChange} value={this.props.value} />
      </div>
    );
  }
};
