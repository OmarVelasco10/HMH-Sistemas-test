import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const InputGitProfile = styled.input`
  border: 1px solid ${(props) => props.theme.colors.purpleSecondary};
  max-width: 50vw;
`;

export const NavbarUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purpleSecondary};

  color: ${(props) => props.theme.colors.whitePrimary};
`;
