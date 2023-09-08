import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export const InputGitProfile = styled.input`
  border: 1px solid ${(props) => props.theme.colors.purpleSecondary};
  max-width: 50vw;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purpleSecondary};
  color: ${(props) => props.theme.colors.whitePrimary};
`;
