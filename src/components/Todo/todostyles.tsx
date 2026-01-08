import styled from 'styled-components';

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  right: 0;
  background-color: #4d4c4c;
  box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -moz-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;  color: black;
  padding: 0.5rem;
  margin: auto;

  transform: translateX(-10px);
  opacity: 0;
  animation: slideIn 0.2s ease-out forwards;

  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 12px 20px;
  margin: 0;
  flex: 1;
  overflow-y: auto;
`;

export const TodoItem = styled.li<{ completed?: boolean }>`
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;

  background: ${({ completed }) => (completed ? '#f1f3f5' : '#f8f9fa')};
  color: ${({ completed }) => (completed ? '#868e96' : '#212529')};

  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};

  &:hover {
    cursor: pointer;
  }
`;

export const TodoText = styled.span`
  flex: 1;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;
`;

export const Close = styled.button`
  font-size: 18px;
  background-color: #4d4c4c;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`