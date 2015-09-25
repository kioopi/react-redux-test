import EditableGreeting from "./cmps/editable_greeting/editable_greeting";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  value: state.greeting.greeting
});

let mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch({
    type: 'greet',
    greeting: value
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableGreeting);
