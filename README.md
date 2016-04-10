# Boilerplate Es6 React Redux Webpack

This is a starter kit to get you working with es6 classes and modules within React using Redux and Webpack. The kit includes basic routing using [react-router](https://github.com/reactjs/react-router) and uses [redux-resource](https://github.com/jfairbank/redux-resource) for ajax requests via redux.

##Basic Setup

1. run `git clone https://github.com/nearbycoder/boilerplate-es6-react-redux-webpack.git`
2. run `npm install` within the directory the repo is located
3. run 'npm start' this will start webpack-dev-server on port 8080
4. From there the root of the app is `/src/app/app.js`

Take note: I have created an example app that you can strip out. This is more for knowing where the resources go.

##Build Production

run `npm run build`

Take note: this will extract everything into the `./dist` folder as well as, dedupe any code for optimization, uglify the javascript bundle, and copy anything withint he public folder besides the html to the `./dist` folder. In addition the styles will be inlined after being comiled into css.

