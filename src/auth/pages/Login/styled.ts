import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
`;

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  form {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.colors.purpleSecondary};
    box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.2);
    width: 50%;
  }
`;

export const LoginRow = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.purpleSecondary};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purpleSecondary};
  color: ${(props) => props.theme.colors.whitePrimary};
`;

export const Input = styled.input`
  border-color: ${(props) => props.theme.colors.purpleSecondary};
`;
