import styled from 'styled-components';

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  color: black;
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

export const TodoItem = styled.li<{ completed: boolean }>`
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;

  background: ${({ completed }) => (completed ? '#f1f3f5' : '#f8f9fa')};

  color: ${({ completed }) => (completed ? '#868e96' : '#212529')};

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  &:hover {
    cursor:pointer;
  }
  `;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #495057;
`;
