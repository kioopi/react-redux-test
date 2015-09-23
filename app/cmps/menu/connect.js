import Menu from "./menu";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  menu: state.menu,
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
