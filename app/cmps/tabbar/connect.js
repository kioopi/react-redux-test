import Tabbar from "./tabbar";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  tabs: state.section.sections.map((item) => {
    return  { ...item.menu, slug: item.slug}
  }),
  activeSection: state.section.activeSection
});

let mapDispatchToProps = (dispatch) => ({
  selectSection: (value) => dispatch({
    type: 'selectSection',
    section: value
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabbar);
