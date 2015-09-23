import Root from "./root";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  activeSection: state.section.activeSection
});

let mapDispatchToProps = (dispatch) => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
