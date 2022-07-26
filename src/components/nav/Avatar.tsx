import { themeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';
import sun from 'assets/img/sun.png';
import moon from 'assets/img/mode.png';
function Avatar() {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <button
      onClick={toggleTheme}
      className="h-full w-11  overflow-hidden  rounded-lg shadow-md hover:shadow-inner"
    >
      <img
        className="h-full w-full object-cover p-2  "
        src={theme === 'light' ? sun : moon}
        alt="avatar"
      />
    </button>
  );
}

export default Avatar;
