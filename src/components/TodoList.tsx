import React, { useState } from 'react';
import { List, Button, Checkbox, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodo } from '../interfaces/ITodo';

interface TodoListProps {
  todos: ITodo[];
  filter: string;
  deleteTodo: (uid: string) => void;
  updateTodo: (uid: string, updatedTodo: Partial<ITodo>) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, filter, deleteTodo, updateTodo }) => {
  const [editingUid, setEditingUid] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState('');

  const filteredTodos = todos.filter((todo) =>
    todo.tarea.toLowerCase().includes(filter.toLowerCase())
  );

  const startEditing = (uid: string, task: string) => {
    setEditingUid(uid);
    setEditedTask(task);
  };

  const saveEditedTask = async (uid: string) => {
    // Encuentra el objeto 'todo' en el array 'todos' utilizando el uid
    const todo = todos.find((todo) => todo.uid === uid);

    // Si no se encuentra el objeto 'todo', retorna
    if (!todo) return;

    // Combina el objeto 'todo' existente con las propiedades actualizadas
    const updatedProperties = { ...todo, tarea: editedTask };

    await updateTodo(uid, updatedProperties);
    setEditingUid(null);
    setEditedTask('');
  };

  const handleCheckboxChange = async (uid: string, checked: boolean) => {
    const updatedTodo = todos.find((todo) => todo.uid === uid);
    if (updatedTodo) {
      await updateTodo(uid, {
        uid: updatedTodo.uid,
        tarea: updatedTodo.tarea,
        completado: checked,
        orden: updatedTodo.orden,
      });
      setEditedTask('');
    }
  };
  

  return (
    <List
      itemLayout="horizontal"
      dataSource={filteredTodos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              icon={<DeleteOutlined />}
              size="middle"
              onClick={() => deleteTodo(todo.uid)}
              type="primary"
              danger
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
                <Checkbox
                checked={todo.completado}
                onChange={(e) => handleCheckboxChange(todo.uid, e.target.checked)}
              />
            }
            title={
              editingUid === todo.uid ? (
                <Input
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  onPressEnter={() => saveEditedTask(todo.uid)}
                  onBlur={() => saveEditedTask(todo.uid)}
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.completado ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => startEditing(todo.uid, todo.tarea)}
                >
                  {todo.tarea}
                </span>
              )
            }
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
