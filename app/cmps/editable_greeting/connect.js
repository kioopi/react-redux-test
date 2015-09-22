import EditableGreeting from "./editable_greeting";
import { Provider, connect } from 'react-redux';

function mapStateToProps(state)  {
  return {
    value: state.greeting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (value) => dispatch({
      type: 'greet',
      greeting: value
    })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableGreeting);
