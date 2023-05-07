import axios from 'axios';
import { ITodo } from '../interfaces/ITodo';

export const getTodos = async (): Promise<ITodo[]> => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/ToDo');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export const addTodo = async (task: string): Promise<void> => {
  try {
    await axios.post(process.env.REACT_APP_API_BASE_URL+'/api/ToDo', { tarea: task });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const deleteTodo = async (uid: string): Promise<void> => {
  try {
    await axios.delete(process.env.REACT_APP_API_BASE_URL+`/api/ToDo/${uid}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export const updateTodo = async (uid: string, updatedTodo: Partial<ITodo>): Promise<void> => {
  try {
    await axios.put(process.env.REACT_APP_API_BASE_URL+`/api/ToDo/${uid}`, updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export {};
