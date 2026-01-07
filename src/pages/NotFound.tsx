import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

function NotFound() {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>The page you're looking for doesn't exist.</Message>
      <StyledLink to="/">Go back</StyledLink>
    </Container>
  );
}

export default NotFound;
