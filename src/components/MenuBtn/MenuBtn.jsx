import React from 'react'
import './MenuBtn.sass'

function MenuBtn({ isActive, onClick }) {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu_btn
      ${isActive === true ? "active" : ""}
       ${isActive === false ? "unactive" : ""}
      `}
    >
      <span className='span'></span>
    </button>
  );
}

export default MenuBtn