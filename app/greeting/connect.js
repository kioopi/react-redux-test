import { connect } from 'react-redux';

import EditableGreeting from "./cmps/editable_greeting/editable_greeting";
import { changeGreeting } from './actions';

let mapStateToProps = (state) => ({
  value: state.greeting.greeting
});

let mapDispatchToProps = (dispatch) => ({
  onChange: value => dispatch(changeGreeting(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableGreeting);
