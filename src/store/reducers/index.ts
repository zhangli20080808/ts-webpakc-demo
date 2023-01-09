import counter, { CounterState } from './counter';
import todos, { TodosState } from './todos';

import { combineReducers } from 'redux';
const reducers = {
  counter,
  todos,
};

// 定义类型
type ReducerType = typeof reducers;

// 合并后的状态类型
type CombineState = {
  [K in keyof ReducerType]: ReturnType<ReducerType[K]>;
};

export { CounterState, TodosState, CombineState };
const combineReducer = combineReducers(reducers);
export default combineReducer;
