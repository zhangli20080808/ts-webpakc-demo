import { ADD, MINUS } from '../../action-type';

function add() {
  return { type: ADD };
}
function minus() {
  return { type: MINUS };
}

export type CounterAction = ReturnType<typeof add> | ReturnType<typeof minus>;
