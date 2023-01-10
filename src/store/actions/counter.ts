import { ADD, MINUS } from '../../action-type';

export function add() {
  return { type: ADD };
}
export function minus() {
  return { type: MINUS };
}

export type CounterAction = ReturnType<typeof add> | ReturnType<typeof minus>;
