import styled from 'styled-components';
import UserGrid from '../components/Users/UserGrid';
import { useState } from 'react';
import Todo from '../components/Todo/Todo';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

function Home() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container>
      <Title>Users</Title>
      <UserGrid setUser={(id: number) => setSelectedId(id)} />
      <Todo userId={selectedId} />
    </Container>
  );
}

export default Home;
