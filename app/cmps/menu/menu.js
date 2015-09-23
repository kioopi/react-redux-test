import React from "react";
import Button from "../button/button.js";
import styles from './styles.css';

export default class extends React.Component {
  render() {
    let buttons = this.props.menu.map((btn) => {
      let clickHandler = () => {
        this.props.selectSection(btn.label.toLowerCase());
      };
      let active = this.props.activeSection == btn.label.toLowerCase();
      return <Button label={btn.label} icon={btn.imageUrl} onClick={clickHandler} active={active} />;
    });

    return (
      <div className={styles.menu}>
        {buttons}
      </div>
    );
  }
};
