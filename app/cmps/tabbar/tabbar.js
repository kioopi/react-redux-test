import React from "react";
import Button from "../button/button.js";
import styles from './styles.css';

export default class extends React.Component {
  render() {
    let buttons = this.props.tabs.map((btn) => {
      let clickHandler = () => {
        this.props.selectSection(btn.slug);
      };

      let active = this.props.activeSection == btn.slug;

      return <Button label={btn.label} icon={btn.imageUrl} onClick={clickHandler} active={active} />;
    });

    return (
      <div className={styles.menu}>
        {buttons}
      </div>
    );
  }
};
