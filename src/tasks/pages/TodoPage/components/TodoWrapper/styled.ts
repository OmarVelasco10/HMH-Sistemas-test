import styled from "styled-components";

export const ContainerWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.purplePrimary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  padding: 2rem;
`;

export const TitleWrapper = styled.h1`
  color: ${(props) => props.theme.colors.whitePrimary};
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;
