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
   return {...state, activeSection: action.section};
 } else {
   return state;
 }
}

export default combineReducers({
  greeting,
  articles,
  section,
  menu
});
