import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo';

describe('Todo component', () => {
  test('renders Fi Group ToDo text', () => {
    render(<Todo />);
    const todoText = screen.getByText(/Fi Group ToDo/i);
    expect(todoText).toBeInTheDocument();
  });
});
