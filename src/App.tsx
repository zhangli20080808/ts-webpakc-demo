import React from 'react';
import Todos from './components/Todos/index';
import store from '../src/store';
console.log(store.getState());

function App() {
  return (
    <div>
      我是react项目-TodoList
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
