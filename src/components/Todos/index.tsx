import React from 'react';
import { Todo } from '../../model';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

interface Props {}

interface State {
  todoList: Array<Todo>;
}

class TodoList extends React.Component<Props, State> {
  state = {
    todoList: [] as Array<Todo>,
  };
  addTodo = (todo: Todo) => {
    this.setState({ todoList: [...this.state.todoList, todo] });
  };
  render() {
    const { todoList } = this.state;
    console.log(todoList);
    return (
      <div style={{ width: 400 }}>
        <TodoInput addTodo={this.addTodo} />
        {
          <ul>
            {todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default TodoList;
