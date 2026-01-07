import styled from 'styled-components';
import UserGrid from '../components/Users/UserGrid';
import { useState } from 'react';
import Todos from '../components/Todo/Todo';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4d4c4c;
  margin-bottom: 1rem;
`;

function Home() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container>
      <Title onClick={()=>setSelectedId(null)}>Users</Title>
      <UserGrid setUser={(id: number) => setSelectedId(id)} />
      <Todos userId={selectedId} />
    </Container>
  );
}

export default Home;
