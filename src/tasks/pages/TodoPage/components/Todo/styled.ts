import styled from "styled-components";

interface TitleProps {
  done: boolean;
}

export const MainContainer = styled.div`
width: 419px;
   display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;

  p {
    margin-block-end: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Title = styled.p<TitleProps>`
  color: ${(props) => props.done &&  '#c5aeff' };
  text-decoration: ${(props) => props.done && 'line-through' };
`;




