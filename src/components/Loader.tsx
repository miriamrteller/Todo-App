import { styled } from 'styled-components';

const LoaderWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
`;

const LoaderSpinner = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask: radial-gradient(circle closest-side at 50% 40%,#0000 94%, #000);
  transform-origin: 50% 40%;
  animation: l25 1s infinite linear;
  @keyframes l25 {
    100% {transform: rotate(1turn)}
  }
`;

export function Loader() {
  return (
    <LoaderWrapper>
      <LoaderSpinner />
    </LoaderWrapper>
  );
}

export default Loader;
