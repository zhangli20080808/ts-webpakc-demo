import { ADD, MINUS } from '../../action-type';
import { CounterAction } from '../actions/counter';

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };
export default (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case MINUS:
      return { count: state.count - 1 };

    default:
      return state;
  }
};
