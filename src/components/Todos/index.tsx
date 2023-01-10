import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../../model';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import * as actions from '../../store/actions/todos';
import { CombineState, TodosState } from '../../store/reducers';
type Props = TodosState & typeof actions;

interface State {
  // todoList: Array<Todo>;
}

class TodoList extends React.Component<Props, State> {
  // state = {
  //   todoList: [] as Array<Todo>,
  // };
  // addTodo = (todo: Todo) => {
  //   this.setState({ todoList: [...this.state.todoList, todo] });
  // };
  render() {
    const { list, addTodo } = this.props;
    return (
      <div style={{ width: 400 }}>
        <TodoInput addTodo={addTodo} />
        {
          <ul>
            {list.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        }
      </div>
    );
  }
}
const mapStateToProps = (state: CombineState): TodosState => state.todos;
export default connect(mapStateToProps, actions)(TodoList);
