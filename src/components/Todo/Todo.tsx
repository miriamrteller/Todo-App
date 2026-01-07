import { styled } from 'styled-components';
import { useTodos } from './useTodo';

const Popout = styled.div``;

export function Todo({ userId }: { userId: number | null }) {
  const todos = useTodos(userId);

  if (!todos || todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <Popout>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} {todo.completed ? '✓' : ''}
          </li>
        ))}
      </ul>
    </Popout>
  );
}
export default Todo;
