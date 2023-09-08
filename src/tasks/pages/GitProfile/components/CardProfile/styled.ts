import styled from "styled-components";

export const MainContainer = styled.div`
  width: 18rem;
  border-color:  ${(props) => props.theme.colors.purpleSecondary};

  li {
    border-color: ${(props) => props.theme.colors.purpleSecondary};
  }
`;

export const CardsContainer = styled.div`
    display: flex;
    max-width: 80vw;
    gap: 10px;
`;

export const ImgProfile = styled.img``

