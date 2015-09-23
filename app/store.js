import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { combineReducers } from 'redux';


// Reducers
function greetingAction(state={greeting: 'World'}, action) {
  switch(action.type){
    case 'greet':
      return {...state, greeting: action.greeting};
    default:
      return state;
  }
}

const articles = [
  { title: 'Article 1', text: 'Some text', image: { url: 'http://takopost.com/wp-content/uploads/2015/08/Google_Logo.png' }},
  { title: 'Article 2', text: 'Some more text', image: { url: 'http://www.plusyourbusiness.com/wp-content/uploads/2013/11/GooglePlus-Logo-Official.png' }}
];

function articleAction(state=articles, action) {
  return state;
}

const menuItems = [
 { label: 'Start', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
 { label: 'Live', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
 { label: 'Menu', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
];

function menu(state=menuItems, action) {
  return state;
}

function section(state={activeSection: 'start'}, action) {
 if (action.type == 'selectSection') {
   let st = {...state, activeSection: action.section};
   console.log('select section ' + action.section, st);
   return st;
 } else {
   return state;
 }
}

const app = combineReducers({
  greeting: greetingAction,
  articles: articleAction,
  menu,
  section
});


// middleware
const finalCreateStore = compose(
  // Enables your middleware:
  // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

// store from middleware and reducers
export default finalCreateStore(app);
