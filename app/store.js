import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';

// creating a redux store with a single action

function greetingAction(state={greeting: 'World'}, action) {
  switch(action.type){
    case 'greet':
      return {greeting: action.greeting};
    default:
      return state;
  }
}

const finalCreateStore = compose(
  // Enables your middleware:
  // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default finalCreateStore(greetingAction);
