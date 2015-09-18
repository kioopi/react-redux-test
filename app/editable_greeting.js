import React from "react";
import Textinput from './textinput.js';
import Greeting from './greeting.js';

// import classnames from css file
import styles from './css/editable_greeting.css';

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
