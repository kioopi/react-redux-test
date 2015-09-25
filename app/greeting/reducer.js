export default function greeting(state={greeting: 'World'}, action) {
  switch(action.type){
    case 'greet':
      return {...state, greeting: action.greeting};
    default:
      return state;
  }
};
