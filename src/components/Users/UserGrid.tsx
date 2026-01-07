import { styled } from 'styled-components';
import { UserCard } from './UserCard';
import { users } from '../../api/users';
import { type User } from '../../Types/UserTypes';
import { Loader, useLoading } from '../Common';

const Wrapper = styled.div`
  width:80vw;
  `;

const Container = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function UserGrid(
  { selectedUser,
    selectUser }: {
      selectedUser: number | null;
      selectUser: (id: number) => void;
    }) {

  const { loading } = useLoading();

  return (
    <Wrapper>
      {loading || !users ? (
        <Loader />
      ) : (
        <Container>
          {users.map((u: User) => (
            <UserCard user={u} selectedUser={selectedUser} selectUser={selectUser} />
          ))}
        </Container>
      )}
    </Wrapper>
  );
}

export default UserGrid;
