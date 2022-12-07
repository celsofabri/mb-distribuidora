import React from 'react';
import { StyledWrapper } from 'global/styles/index';
import { 
  StyledHeader, 
  StyledLogo, 
  StyledNav, 
  StyledNavList, 
  StyledNavItem, 
  StyledNavAnchor 
} from './styles';

const Header = () => {

  return(
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo>
          MB
        </StyledLogo>
        <StyledNav>
          <StyledNavList>
            <StyledNavItem>
              <StyledNavAnchor 
                href="#" 
                className="nav__anchor"
              >
                Menu item 1
              </StyledNavAnchor>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavAnchor 
                href="#" 
                className="nav__anchor"
              >
                Menu item 2
              </StyledNavAnchor>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavAnchor 
                href="#" 
                className="nav__anchor"
              >
                Menu item 3
              </StyledNavAnchor>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavAnchor 
                href="#" 
                className="nav__anchor"
              >
                Menu item 4
              </StyledNavAnchor>
            </StyledNavItem>
          </StyledNavList>
        </StyledNav>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Header;