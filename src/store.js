const { createStore } = require('redux');
const reducer = require('./reducer')


//createStore = higher order function. Takes in reducer function as an argument
const store = createStore(reducer);

module.exports = store;
