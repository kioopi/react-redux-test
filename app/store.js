import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { combineReducers } from 'redux';

import React from "react";

import ArticleList from "./articles/connect";
import articles from './articles/reducer';

import EditableGreeting from "./greeting/connect";
import greeting from './greeting/reducer';

import Menu from './menu/connect';
import menu from './menu/reducer';



const sections = [
  {
    slug: 'start',
    cmp: ArticleList,
    menu: { label: 'Start', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
  },
  {
    slug: 'greeting',
    cmp: EditableGreeting,
    menu: { label: 'Hello', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
  },
  {
    slug: 'menu',
    cmp: Menu,
    menu: { label: 'Menu', imageUrl: 'http://uxrepo.com/static/icon-sets/mfg-labs/png32/36/000000/globe-inv-36-000000.png' },
  }
];

function section(state={sections: sections, activeSection: 'start'}, action) {
 if (action.type == 'selectSection') {
   let st = {...state, activeSection: action.section};
   console.log('select section ' + action.section, st);
   return st;
 } else {
   return state;
 }
}

const app = combineReducers({
  greeting,
  articles,
  section,
  menu
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
