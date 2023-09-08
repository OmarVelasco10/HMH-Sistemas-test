import styled from "styled-components";

export const FormTodo = styled.form`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  background: none;
  border: 1px solid #8758ff;
  color: ${(props) => props.theme.colors.whitePrimary};
  margin-bottom: 2rem;
  margin-top: 1rem;
  outline: none;
  padding: 0.5rem 1rem;
  width: 300px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purpleSecondary};
  border: none;
  color: ${(props) => props.theme.colors.whitePrimary};
  cursor: pointer;
  padding: 0.55rem;
`;
