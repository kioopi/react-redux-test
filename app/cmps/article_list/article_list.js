import React from "react";
import Article from "../article/article";
import styles from './styles.css';

export default class extends React.Component {
  render() {

    let articles = this.props.articles.map((item) => {
      return <Article data={item} className="start" />;
    });

    return (
      <div className={styles.articleList}>
        {articles}
      </div>
    );
  }
};
