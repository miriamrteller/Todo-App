import { styled } from 'styled-components';
import type { User } from '../../Types/UserTypes';

const Card = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -moz-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  ${(props) => props.selected && `
   transform: scale(1.03); 
   box-shadow: 0px 0px 8px 2px rgba(173,181,189,0.75);
   -webkit-box-shadow: 0px 0px 8px 2px rgba(173,181,189,0.75);
   -moz-box-shadow: 0px 0px 8px 2px rgba(173,181,189,0.75);
  `}
`;

const Name = styled.h5`
  padding: 0.75rem;
  color: #4A70A9;
  text-align: center;
  margin: auto;
  font-size: 16px;`;

const Username = styled.p`
  text-align: center;
  margin: auto;
  font-size: 12px;`;

const Button = styled.button`
  margin: 0.5rem;
  background-color: #8FABD4;
  box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -moz-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  `;

export function UserCard({
  user,
  selectedUser,
  selectUser
}: {
  user: User;
  selectedUser: number | null;
  selectUser: (id:number) => void;
}) {

  return (
    <Card selected={selectedUser === user.id}>
      <Name>{user.name}</Name>
      <Username>{user.username}</Username>
      <Button onClick={() => selectUser(user.id)}>Show Todos</Button>
    </Card>
  );
}
