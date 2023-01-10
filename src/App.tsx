import React from 'react';
import Todos from './components/Todos/index';
import Counter from './components/Counter';
import store from '../src/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        我是react项目-TodoList
        <Counter />
        <div>
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
