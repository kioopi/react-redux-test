import Root from "./root";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  activeSection: state.section.activeSection,
  sections: state.section.sections
});

let mapDispatchToProps = (dispatch) => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
