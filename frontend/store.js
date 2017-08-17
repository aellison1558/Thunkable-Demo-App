import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import appsReducer from './reducers/apps.js'

let store = createStore(appsReducer, applyMiddleware(thunkMiddleware));

export default store;