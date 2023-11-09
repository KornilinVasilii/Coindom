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
      <p></p>
    </button>
  );
}

export default MenuBtn