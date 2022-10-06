import { applyMiddleware, createStore, compose } from 'redux'
import { weatherReducer } from "./reducer";
import thunk from "redux-thunk";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(weatherReducer, createComposer(applyMiddleware(thunk)));

export default store;