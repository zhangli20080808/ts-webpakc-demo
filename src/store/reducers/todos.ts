import { ADD_TODO } from '../../action-type';
import { Todo } from '../../model';
import { TodoAction } from '../actions/todos';

export interface TodosState {
  list: Array<Todo>;
}

const initialState: TodosState = { list: [] };
export default (
  state: TodosState = initialState,
  action: TodoAction
): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return { list: [...state.list, action.payload] };
    default:
      return state;
  }
};
