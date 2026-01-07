import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width:80vw;
  `;

export const Container = styled.div`
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


export const Card = styled.div<{ selected?: boolean }>`
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

export const Name = styled.h5`
  padding: 0.75rem;
  color: #4A70A9;
  text-align: center;
  margin: auto;
  font-size: 16px;`;

export const Username = styled.p`
  text-align: center;
  margin: auto;
  font-size: 12px;`;

export const Button = styled.button`
  margin: 0.5rem;
  background-color: #8FABD4;
  box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  -moz-box-shadow: 0px 0px 4px 1px rgba(173,181,189,0.75) ;
  `;
