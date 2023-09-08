import styled from "styled-components";

interface TitleProps {
  done: boolean;
}

export const MainContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.purpleSecondary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.whitePrimary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  width: 419px;

  p {
    margin-block-end: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Title = styled.p<TitleProps>`
  color: ${(props) => props.done && "#c5aeff"};
  text-decoration: ${(props) => props.done && "line-through"};
`;
