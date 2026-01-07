import { UserCard } from './UserCard';
import { users } from '../../api/users';
import { type User } from '../../Types/UserTypes';
import { Loader, useLoading } from '../Common';
import { Wrapper, Container } from './userstyles';

export function UserGrid() {

  const { loading } = useLoading();

  return (
    <Wrapper>
      {loading || !users ? (
        <Loader />
      ) : (
        <Container>
          {users.map((u: User) => (
            <UserCard user={u} />
          ))}
        </Container>
      )}
    </Wrapper>
  );
}

export default UserGrid;
