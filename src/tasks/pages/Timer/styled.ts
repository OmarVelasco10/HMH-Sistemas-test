import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export const CardContainer = styled.div`
  border-color: ${(props) => props.theme.colors.purpleSecondary};
  gap: 10px;
`;

export const Input = styled.input`
  border-color: ${(props) => props.theme.colors.purpleSecondary};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purpleSecondary};
  color: ${(props) => props.theme.colors.whitePrimary};
`;
