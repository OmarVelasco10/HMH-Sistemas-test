import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
 
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  form {
    background-color: #FFF;
    box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.2);
    width: 50%;
  }

`;

export const LoginRow = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0;
`;
