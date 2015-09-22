import React from 'react';

import store from "./store.js";

import Root from "./cmps/root/root.js";

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

React.render(
  <Root />,
  document.body
);
