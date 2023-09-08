import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  border-color: ${(props) => props.theme.colors.purpleSecondary};
`;

export const NavLinkCustom = styled(NavLink)`
  background-color: ${(props) => props.theme.colors.purpleSecondary};
  color: ${(props) => props.theme.colors.whitePrimary};
`;
