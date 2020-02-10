import React from 'react';

import Logo from '../logo/logo';
import Score from '../score/score';
import Pagination from '../pagination/pagination';

import './header.sass';

function Header() {
  return (
    <header className="header">
      <div className="header__top-panel">
        <Logo />
        <Score />
      </div>
      <div className="header__pagination">
        <Pagination />
      </div>
    </header>
  )
}

export default Header;
