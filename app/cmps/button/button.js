import React from "react";
import styles from './styles.css';

export default class extends React.Component {
  render() {
    let style = this.props.icon && {backgroundImage: "url("+this.props.icon+")"};

    let classes = [styles.button];

    if (this.props.active) {
      classes.push(styles.active);
    }

    return (
      <div className={classes.join(' ')} style={style} onClick={this.props.onClick}>
        <h3>{this.props.label}</h3>
      </div>
    );
  }
};
