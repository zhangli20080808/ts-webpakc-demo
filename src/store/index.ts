import { createStore } from 'redux';
import combineReducer from './reducers';
const store = createStore(combineReducer);

window.store = store;

export default store;
