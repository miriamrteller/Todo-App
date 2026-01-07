import { useTodos } from './useTodo';
import { Drawer, TodoList, TodoItem, Checkbox, TodoText, Close } from './todostyles';
import { useAppState } from '../../store/useAppState';
import type { Todo } from '../../Types/TodosTypes';

export function Todos() {
  const { setSelectedUser } = useAppState();
  const { todos, toggleTodo } = useTodos();

  if (!todos) return;

  return (
    <Drawer>
      <TodoList>
        <Close onClick={() => setSelectedUser(null)}>x</Close>
        {
          todos.length === 0
            ?
            <TodoItem>No todos here.</TodoItem>
            :
            todos.map((todo: Todo, index: number) => (
              <TodoItem key={index} completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
                <Checkbox
                  checked={todo.completed}
                  />
                <TodoText>{todo.title} {todo.completed ? '✓' : ''}</TodoText>
              </TodoItem>
            ))
        }
      </TodoList>
    </Drawer>
  );
}
export default Todos;
