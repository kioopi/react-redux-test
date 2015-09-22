import ArticleList from "./article_list";
import { Provider, connect } from 'react-redux';

let mapStateToProps = (state) => ({
  articles: state.articles
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
