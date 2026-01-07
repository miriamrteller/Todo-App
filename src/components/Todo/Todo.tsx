import { useTodos } from './useTodo';
import { Drawer, TodoList, TodoItem } from './todostyles';
import type { Todo } from '../../api/todos';



export function Todos({ userId }: { userId: number | null }) {
  const todos = useTodos(userId);

  const completeTodo = (todo:Todo) => {
    // persist completed todo
  }

  if (!todos || todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <Drawer>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} completed={todo.completed} onClick={()=>completeTodo(todo)}>
            {todo.title} {todo.completed ? '✓' : ''}
          </TodoItem>
        ))}
      </TodoList>
    </Drawer>
  );
}
export default Todos;
