import { UserCard } from './UserCard';
import { useAppState } from '../../store/useAppState';
import { type User } from '../../types/UserTypes';
import { Loader, useLoading } from '../Common';
import { Wrapper, Container, FilterButton } from './userstyles';

export function UserGrid() {
  const { users, toggleFilter, filtered } = useAppState();

  const { loading } = useLoading();

  return (
    <Wrapper>
      {loading || !users ? (
        <Loader />
      ) : (<>
        <FilterButton filtered={filtered} onClick={toggleFilter}>Show only incomplete {filtered ? '✓' : ''}</FilterButton>
        <Container>
          {users.map((u: User) => (
            <UserCard user={u} />
          ))}
        </Container>
        </>
      )}
    </Wrapper>
  );
}

export default UserGrid;
