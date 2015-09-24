import Menu from "./menu";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  menu: state.section.sections.map((item) => {
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
)(Menu);
