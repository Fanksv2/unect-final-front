import React from 'react';
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  return (
    <>
      <div className='PageContainer'>
        <h1>uTask</h1>
        <TodoInput />
        <TodoList />
        <DoneList />
      </div>
    </>
  );
}

export default App;