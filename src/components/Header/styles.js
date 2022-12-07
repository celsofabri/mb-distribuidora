import styled from 'styled-components';
import colors from 'global/styles/colors';

export const StyledHeader = styled.header`
  display: block;
  width: 100%;
  padding: 16px 0;
  background-color: ${colors.black};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledLogo = styled.h1`
  margin: 0;
  color: ${colors.orange};
`

export const StyledNav = styled.nav`
  display: block;
`

export const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
`

export const StyledNavItem = styled.li`
  display: inline-block;
  margin: 0 16px;
`

export const StyledNavAnchor = styled.a`
  display: inline-block;
  color: ${colors.white};
  text-decoration: none;
`