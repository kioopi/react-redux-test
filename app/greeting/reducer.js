import { CHANGE_GREETING } from './actions';

export default function greeting(state={greeting: 'World'}, action) {
  switch(action.type){
    case CHANGE_GREETING:
      return {...state, greeting: action.greeting};
    default:
      return state;
  }
};
