import { createStore } from 'redux';

// creating a redux store with a single action

function greetingAction(state={greeting: 'World'}, action) {
  switch(action.type){
    case 'greet':
      return {greeting: action.greeting};
    default:
      return state;
  }
}

export default createStore(greetingAction);
