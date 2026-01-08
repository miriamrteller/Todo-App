import type { User } from '../../types/UserTypes';
import { useAppState } from '../../store/useAppState';
import { Card, Name, Username, Button } from './userstyles';

export function UserCard({
  user,
}: {
  user: User;
}) {

  const { selectedUserId, setSelectedUser } = useAppState();

  return (
    <Card selected={selectedUserId === user.id}>
      <Name>{user.name}</Name>
      <Username>{user.username}</Username>
      <Button onClick={() => setSelectedUser(user.id)}>Show Todos</Button>
    </Card>
  );
}
