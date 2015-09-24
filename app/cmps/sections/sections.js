import React from "react";

import styles from './styles.css';

export default class extends React.Component {
  render() {

    let sections = this.props.sections.map((item) => {
      let classes = [styles.section];
      if (this.props.activeSection == item.slug) {
        classes.push(styles.active);
      }

      return <div className={classes.join(' ')}>{ React.createElement(item.cmp) }</div>;
    });

    return (
      <div className={styles.sections}>
        { sections }
      </div>
    );
  }
}
