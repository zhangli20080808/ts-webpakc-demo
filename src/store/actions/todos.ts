import { ADD_TODO } from '../../action-type';
import { Todo } from '../../model';

export function addTodo(todo: Todo) {
  return { type: ADD_TODO, payload: todo };
}

export type TodoAction = ReturnType<typeof addTodo>;
