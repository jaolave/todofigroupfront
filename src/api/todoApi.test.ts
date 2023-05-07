import axios from 'axios';
import { default as MockAdapter } from 'axios-mock-adapter';
import { getTodos, addTodo} from './todoApi';
import { ITodo } from '../interfaces/ITodo';

const mock = new MockAdapter(axios);

describe('getTodos', () => {
  it('Comnprobar tarear', async () => {
    const todos: ITodo[] = [
    {
      uid: 'B69ABFA8-8BC4-4EBB-928A-2C10E3915777',
      tarea: 'Test 1',
      completado: false,
      orden: 1,
    },
    {
      uid: 'DCF974EB-AEF0-4707-A867-37D5D8253262',
      tarea: 'Test 2',
      completado: true,
      orden: 2,
    },
    ];

    mock.onGet('/api/ToDo').reply(200, todos);  
    const fetchedTodos = await getTodos(); 
    expect(fetchedTodos).toEqual(todos);
  });
});

describe('addTodo', () => {
  it('Agregar una nueva tarea.', async () => {

    const newTodo = {
      tarea: 'Test Agregar tarea',
      completado: false,
      orden: 1,
    };

    mock.onPost('/api/ToDo').reply(200);  
    await addTodo(newTodo.tarea);  
    expect(mock.history.post.length).toBe(1);
    const dataString = mock.history.post[0].data;
    const dataObject = JSON.parse(dataString);
    expect(dataObject.tarea).toEqual(newTodo.tarea);
  });
});