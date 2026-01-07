import styled from 'styled-components';
import UserGrid from '../components/Users/UserGrid';
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

  return (
    <Container>
      <Title>Users</Title>
      <UserGrid />
      <Todos  />
    </Container>
  );
}

export default Home;
