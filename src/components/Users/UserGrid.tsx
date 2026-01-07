import { styled } from 'styled-components';
import { UserCard } from './UserCard';
import { users, type User } from '../../api/users';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

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

export function UserGrid({ setUser }: { setUser: (id: number) => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Wrapper>
      {loading || !users ? (
        <Loader />
      ) : (
        <Container>
          {users.map((u: User) => (
            <UserCard user={u} setUser={setUser} />
          ))}
        </Container>
      )}
    </Wrapper>
  );
}

export default UserGrid;
