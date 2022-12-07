import React from 'react';
import { StyledWrapper } from 'global/styles/index';

const Header = () => {

  return(
    <header className="header">
      <StyledWrapper>
        <h1 className="logo">MB Distribuidora</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__anchor">Menu item 1</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__anchor">Menu item 2</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__anchor">Menu item 3</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__anchor">Menu item 4</a>
            </li>
          </ul>
        </nav>
      </StyledWrapper>
    </header>
  )
}

export default Header;