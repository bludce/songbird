import React from 'react';

import './pagination.sass'

const TABS = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']

function Pagination() {
  return (
    <ul className="pagination">
      {TABS.map((title, index) => (
        <li className="pagination__item" key={index}>{title}</li>
      ))}
    </ul>
  )
}

export default Pagination;
