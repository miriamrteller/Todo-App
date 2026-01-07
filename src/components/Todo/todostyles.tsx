import styled from 'styled-components';

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.25s ease;
  z-index: 1000;
`;

export const Drawer = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 360px;
  max-width: 90vw;

  background: #ffffff;
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.15);

  transform: translateX(${({ open }) => (open ? '0' : '100%')});
  transition: transform 0.3s ease;

  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

export const DrawerHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  font-weight: 600;
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
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #495057;
`;
