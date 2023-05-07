import React, { useState, useEffect } from 'react';
import { PageHeader } from '@ant-design/pro-layout';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../api/todoApi';
import { ITodo } from '../interfaces/ITodo';


const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (task: string) => {
    await addTodo(task);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (uid: string) => {
    await deleteTodo(uid);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = async (uid: string, updatedTodo: Partial<ITodo>) => {
    await updateTodo(uid, updatedTodo);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  return (
    <div>
      <PageHeader
        title={process.env.REACT_APP_WEBSITE_NAME}
        className="site-page-header"
        avatar={{ src: '/fi-group-todo.png', size: 64 }}
      />

      <TodoInput addTodo={handleAddTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        deleteTodo={handleDeleteTodo}
        updateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default Todo;
