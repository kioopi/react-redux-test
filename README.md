
# React Redux Test

## Build

  * [webpack](https://webpack.github.io/) Build-Tool
  * [Babel](https://babeljs.io/) for ES6

## Application

  * [React](https://facebook.github.io/react/) View Layer
  * [Redux](http://rackt.github.io/redux/) State Management

## Style

  * [css-modules](https://github.com/css-modules/css-modules) CSS Organization
  * via [postcss](https://github.com/postcss/postcss)


# Installation

    # npm install

# Run dev server

    # npm start

# Architecture

 * `app.js` is the entrypoint. The root component of the app is bound to the Redux-store and rendered here.
 * `reducers.js` collects redux actions/reducers from the main app and modules and joins them.
 * `store.js` creates a Redux-store from reducers.js

Modules consist of directories containing a couple of files:

  * `actions.js` defines the redux actions of the module. Redux actions share a namespace.
  * `reducer.js` defines how the store is altered by actions. Loaded by `reducers.js`.
  * `connect.js` wraps the root component of the module and connects it store.
  * a react component (tree).
