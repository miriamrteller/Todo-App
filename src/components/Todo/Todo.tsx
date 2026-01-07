import { useTodos } from './useTodo';
import { Drawer, TodoList, TodoItem, Checkbox, TodoText, Close } from './todostyles';
import { Loader, useLoading } from '../Common';
import { useAppState } from '../../store/useAppState';

export function Todos() {
  const { selectedUser, clearSelected } = useAppState();
  const { todos, toggleTodo } = useTodos(selectedUser);
  const { loading } = useLoading();

  if (!todos) return;

  return (<>
    {!todos || loading ? <Loader /> : <Drawer>
      <TodoList>
        <Close onClick={clearSelected}>x</Close>
        {
          todos.length === 0
            ?
            <TodoItem>No todos here.</TodoItem>
            :
            todos.map((todo, index) => (
              <TodoItem key={index} completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)} />
                <TodoText>{todo.title} {todo.completed ? '✓' : ''}</TodoText>
              </TodoItem>
            ))
        }
      </TodoList>
    </Drawer>
    }
  </>);
}
export default Todos;
