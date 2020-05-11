import React, { useState, useEffect } from 'react';
import Context from './Context/context';
import TodoList from './Todo/TodoList';
import Loader from './Loader';
// import AddTodo from './Todo/AddTodo';

import './App.css';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-logo'>Todo List</h1>
        </header>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>You don't have any ToDos</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
