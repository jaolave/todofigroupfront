import React from 'react';
import { Input } from 'antd';

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <Input
      placeholder="Filtrar tareas"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{ marginTop: '16px' }}
    />
  );
};

export default TodoFilter;
