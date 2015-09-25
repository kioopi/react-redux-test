import React from "react";

import MenuItem from './menu_item';
import styles from './styles.css';

export default class extends React.Component {
  render() {

    let items = this.props.menuItems.map((item) => {
      return <MenuItem label={item.label} />;
    });

    return (
      <div className={styles.menu}>
        {items}
      </div>
    );
  }
};
