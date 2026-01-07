import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}

export default Layout;
