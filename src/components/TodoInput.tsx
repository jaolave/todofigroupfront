import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

interface TodoInputProps {
  addTodo: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTodo = () => {
    addTodo(newTask);
    setNewTask('');
  };

  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input 
            placeholder="Añadir tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} />
      <Button type="primary" icon={<SaveOutlined />} size="large" onClick={handleAddTodo} />
    </Space.Compact>
    
  );
};

export default TodoInput;
