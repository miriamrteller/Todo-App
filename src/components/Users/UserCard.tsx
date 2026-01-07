import type { User } from '../../Types/UserTypes';
import { useAppState } from '../../store/useAppState';
import { Card, Name, Username, Button } from './userstyles';

export function UserCard({
  user,
}: {
  user: User;
}) {

  const { selectedUser, selectUser } = useAppState();

  return (
    <Card selected={selectedUser === user.id}>
      <Name>{user.name}</Name>
      <Username>{user.username}</Username>
      <Button onClick={() => selectUser(user.id)}>Show Todos</Button>
    </Card>
  );
}
