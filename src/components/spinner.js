import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerAnimation = () => {
  return <Spinner />;
};

export default SpinnerAnimation;
